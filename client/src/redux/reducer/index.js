import { ASCENDENTE } from '../../components/contantes/sort';
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
  POPULATION_ORDER,
  MY_ACTIVITY,
  DELETE_ACTIVITY,
} from '../actions';

const initialState = {
  filteredCountries: [],
  countries: [],
  detail: [],
  activity: [],
  //myActivity: [],
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
        action.payload === 'All'
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
      const allCoun = state.countries;
      const filterActivi =
        action.payload === 'todos'
          ? state.countries
          : allCoun.filter(
              (c) =>
                c.activities &&
                c.activities.filter((a) => a.name === action.payload).length
            );
      return {
        ...state,
        filteredCountries: filterActivi,
      };

    case MY_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };

    default:
      return state;
  }
}
