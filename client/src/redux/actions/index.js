import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const SORT = "SORT";
export const FILTER_CONTINENTS = "FILTER_CONTINENTS";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";
export const COUNTRY_DETAILS = "COUNTRY_DETAILS";

export function getCountries() {
  return async function (dispatch) {
    try {
      await axios.get("http://localhost:3001/countries/").then((countries) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: countries.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchCountries(search) {
  return async function (dispatch) {
    try {
      await axios
        .get("http://localhost:3001/countries/?name=" + search)
        .then((countries) => {
          dispatch({
            type: SEARCH_COUNTRIES,
            payload: countries.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}
export function filterContinents(payload) {
  return {
    type: FILTER_CONTINENTS,
    payload: payload,
  };
}
export function filterCountries(payload) {
  return {
    type: FILTER_COUNTRIES,
    payload: payload,
  };
}
export function countryDetails(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/countries/" + id);
      return dispatch({
        type: "COUNTRY_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
