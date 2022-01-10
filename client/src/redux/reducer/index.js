import { ASCENDENTE } from "../../components/contantes/sort";
import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  SORT,
  FILTER_CONTINENTS,
  FILTER_COUNTRIES,
  COUNTRY_DETAILS,
} from "../actions";

const initialState = {
  countries: [],
  filteredCountries: [],
  detail: [],
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
      let orderedCountries = [...state.countries]; //hacemos una copia en memoria, despues lo ordenamos
      orderedCountries = orderedCountries.sort((a, b) => {
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
        filteredCountries: orderedCountries,
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
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case COUNTRY_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}
