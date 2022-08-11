import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SORT = 'SORT';
export const FILTER_CONTINENTS = 'FILTER_CONTINENTS';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const COUNTRY_DETAILS = 'COUNTRY_DETAILS';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_NAME_COUNTRY = 'GET_NAME_COUNTRY';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const GET_ALL_ACTIVITY = 'GET_ALL_ACTIVITY';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const POPULATION_ORDER = 'POPULATION_ORDER';
export const MY_ACTIVITY = 'MY_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

export function getCountries() {
  return async function (dispatch) {
    try {
      await axios.get('/countries/').then((countries) => {
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
      await axios.get('/countries/?name=' + search).then((countries) => {
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

export function filterActivity(payload) {
  return {
    type: FILTER_ACTIVITY,
    payload: payload,
  };
}

export function filterPopulation(order) {
  return {
    type: POPULATION_ORDER,
    payload: order,
  };
}

export function countryDetails(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get('/countries/' + id);
      return dispatch({
        type: 'COUNTRY_DETAILS',
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postActivity(payload) {
  return async function (dispatch) {
    const response = await axios.post('/activity/', payload);
    dispatch({
      type: 'POST_ACTIVITY',
      payload: response.data,
    });
  };
}

export function getAllActivities(payload) {
  console.log(payload);
  return async function (dispatch) {
    try {
      var json = await axios.get('/activity/', payload);
      return dispatch({
        type: 'GET_ALL_ACTIVITY',
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function myActivity(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get('/activity/' + id);
      return dispatch({
        type: 'MY_ACTIVITY',
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteActivity(id) {
  return async function (dispatch) {
    try {
      var json = await axios.delete('/activity/' + id);
      return dispatch({
        type: DELETE_ACTIVITY,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
