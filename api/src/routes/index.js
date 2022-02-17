const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require("axios");
const { Country, Activities, countries_activities } = require("../db");
const { Op } = require("sequelize");

const router = Router();

//DaTOS API:
const getApiInfo = async () => {
  const apiUrl = await axios.get("https://restcountries.com/v3/all");
  const apiInfo = await apiUrl.data.map((el) => {
    return {
      name: el.name.common,
      id: el.cca3,
      image: el.flags[0], // ? el.flags[0] : "Image not Found",
      continents: el.continents[0],
      capital: el.capital || ["No tiene capital"],
      subregion: el.subregion,
      area: Number(el.area),
      population: Number(el.population),
    };
  });
  //console.log("ESTO ME DEVUELVE LA API:", apiInfo);
  return apiInfo;
};

const getDb = async () => {
  //traer db e incluir una actividad
  return await Country.findAll({
    include: {
      model: Activities,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
};

router.get("/countries", async (req, res, next) => {
  const { name } = req.query;
  let allCountries = await getApiInfo();

  const dbCountries = await Country.count();
  let countries;
  if (dbCountries === 0) {
    countries = await Country.bulkCreate(allCountries);
  }
  countries = await getDb();
  try {
    if (name) {
      let countryName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`, // se filtran los paises que contengan el string que llega por query
          },
        },
        include: [
          {
            model: Activities,
            attributes: ["name"], // se relacionan las actividades de cada país
            through: {
              attributes: [],
            },
          },
        ],
      });

      countryName.length
        ? res.status(200).send(countryName)
        : res.status(404).send("No se existe el pais buscado");
    } else {
      res.status(201).send(countries);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/countries/:id", async (req, res) => {
  const countryId = req.params.id;

  try {
    let detailCountry = await Country.findByPk(countryId, {
      include: [
        {
          model: Activities,
          attribute: ["name", "difficulty", "duration", "season"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.status(200).send(detailCountry);
  } catch (error) {
    res.json({ error: "id no válido" });
  }
});

//////////////////////

// router.get("/countries", (req, res, next) => {
//   return Country.findAll({
//     include: Activities,
//   })
//     .then((countries) => {
//       res.send(countries);
//     })
//     .catch((error) => {
//       next(error);
//     });
// });
//  ------- ----------

router.post(
  "/countries/:countryId/activity/:activityId",
  async (req, res, next) => {
    try {
      const { countryId, activityId } = req.params;
      const country = await Country.findByPk(countryId);
      await country.addActivities(activityId);

      res.status(201).send("SE relaciono con exito");
    } catch (error) {
      next(error);
    }
  }
);

// -----  ACTIVITY   ------------------

// router.get("/activity", (req, res, next) => {
//   return Activities.findAll()
//     .then((activities) => {
//       res.status(201).send(activities);
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

router.get("/activity", async (req, res, next) => {
  const { name } = req.body;
  try {
    let act;
    if (name) {
      act = await Activities.findAll({
        where: {
          name: name,
        },
        include: Country,
      });

      act.length
        ? res.status(200).send(act)
        : res.status(404).send("No se encuentra ninguna actividad");
    } else {
      act = await Activities.findAll({
        include: Country,
      });
      res.status(201).send(act);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/activity/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    let act = await Activities.findOne({
      where: {
        id: id,
      },
      include: Country,
    });

    return res.status(200).json(act);
  } catch (error) {
    next(error);
  }
});

router.post("/activity", async (req, res, next) => {
  const { name, difficulty, duration, season, country } = req.body;
  try {
    const [newActivity, created] = await Activities.findOrCreate({
      where: {
        name,
        difficulty,
        duration,
        season,
      },
    });
    console.log(created);

    // lo relaciono con la actividad creada

    if (country) {
      let countryA = await Country.findAll({ where: { name: country } });
      await newActivity.addCountry(countryA);
    }

    res
      .status(200)
      .send(`La actividad ${name} ha sido creada y relacionada a paises`);
  } catch (error) {
    next(error);
  }
});
////// ------------  PUT ----------------
router.put("/activity/:id", async (req, res, next) => {
  const id = req.params.id;
  const actividad = req.body; //lo q me pasan por body de las propiedades activities
  try {
    let act = await Activities.update(actividad, {
      where: {
        id: id,
      },
    });
    return res.json({ modificado: true });
  } catch (error) {
    next(error);
  }
});

////  ----------  DELETE  --------
router.delete("/activity/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    let act = await Activities.destroy({
      where: {
        id: id,
      },
    });
    return res.json({ eliminado: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;