import { ASCENDENTE } from "../../components/contantes/sort";
import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  SORT,
  FILTER_CONTINENTS,
  FILTER_COUNTRIES,
  COUNTRY_DETAILS,
  POST_ACTIVITY,
  GET_ALL_ACTIVITY,
  FILTER_ACTIVITY,
  GET_ACTIVITY,
  POPULATION_ORDER,
} from "../actions";

const initialState = {
  countries: [],
  filteredCountries: [],
  detail: [],
  activity: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
        detail: action.payload,
      };

    case SEARCH_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };

    case SORT:
      let orderedCountries = [...state.filteredCountries];
      orderedCountries = state.filteredCountries.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredCountries: [...orderedCountries],
      };

    case FILTER_CONTINENTS:
      const continente = state.countries;
      const statusFiltered =
        action.payload === "All"
          ? continente
          : continente.filter((el) => el.continents === action.payload);
      return {
        ...state,
        filteredCountries: statusFiltered,
      };

    case FILTER_COUNTRIES:
      const pais = state.countries;
      const paisFiltrado = pais.filter((el) => el.name === action.payload);
      return {
        ...state,
        filteredCountries: paisFiltrado,
      };

    case POPULATION_ORDER:
      let orderedPop = [...state.filteredCountries];
      orderedPop = state.filteredCountries.sort((a, b) => {
        if (a.population < b.population) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.population > b.population) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredCountries: [...orderedPop],
      };

    case COUNTRY_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_ACTIVITY:
      return {
        ...state,
      };

    case GET_ALL_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };

    case FILTER_ACTIVITY:
      const filtrado = state.activity;
      const filtradoXName =
        action.payload === state.activity
          ? filtrado
          : filtrado.filter((e) => e.name === action.payload);
      return {
        ...state,
        filteredCountries: filtradoXName,
      };

    // const activitiesbycountries = state.actividad;
    // const countriesAll = state.countries;
    // console.log(
    //   "FILTER_ACTIVITY - activitybycountries -----:",
    //   activitiesbycountries
    // );

    // const filt =
    //   action.payload === "todos"
    //     ? countriesAll
    //     : activitiesbycountries
    //         .filter((a) => a.name === action.payload)[0]
    //         .countries.map((e) => e);
    // console.log("FILT__:", filt);
    // return {
    //   ...state,
    //   filteredCountries: filt,
    // };

    // case FILTER_ACTIVITY:
    //   const acti = state.activity;

    //   const filt = acti
    //     .filter((a) => a.name === action.payload)[0]
    //     .countries.map((e) => e);

    // countriesAll.filter((el) =>
    //   el.activities.name?.includes(name ===action.payload)
    // );

    // return {
    //   ...state,
    //   filteredCountries: filt,
    // };

    // case GET_ACTIVITY:
    //   return {
    //     ...state,
    //     activity: action.payload,
    //   };
    default:
      return state;
  }
}
