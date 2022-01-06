// router.get("/countries", async (req, res) => {
//   const { name } = req.query;
//   const allCountries = await getApiInfo();

//   try {
//     const dbCountries = await Country.findAll({
//       include: {
//         model: Activities,
//       },
//     });
//     //if (!name && dbCountries.lenght > 0) res.status(200).json(dbCountries);
//     if (!name && !dbCountries.length) {
//       const dbCountriesFull = await Country.bulkCreate(allCountries);
//       res.status(201).send(dbCountriesFull);
//     }

//     if (name) {
//       let countryName = await Country.findAll({
//         where: {
//           name: {
//             [Op.iLike]: `%${name}%`, // se filtran los paises que contengan el string que llega por query
//           },
//         },
//         include: [
//           {
//             model: Activities,
//             attributes: ["name", "difficulty", "duration", "season"], // se relacionan las actividades de cada país
//             through: {
//               attributes: [],
//             },
//           },
//         ],
//       });

//       countryName.length
//         ? res.status(200).send(countryName)
//         : res.status(404).send("No se existe el pais buscado");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
