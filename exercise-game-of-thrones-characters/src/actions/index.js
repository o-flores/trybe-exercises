import charAPI from '../services/charAPI';

export const GET_CHAR_NAME = 'GET_CHAR_NAME';
export const GET_CHAR_NAME_SUCCESS = 'GET_CHAR_NAME_SUCCESS';
export const GET_CHAR_NAME_ERROR = 'GET_CHAR_NAME_ERROR';

export const getCharName = (payload) => ({
  type: GET_CHAR_NAME,
  payload,
});

export const getCharNameSuccess= (payload) => ({
  type: GET_CHAR_NAME_SUCCESS,
  payload,
});

export const getCharNameError= (payload) => ({
  type: GET_CHAR_NAME_ERROR,
  payload,
});

export const getCharNameThunk = (name) => (dispatch) => {
  dispatch(getCharName());
  charAPI(name)
    .then((res) => dispatch(getCharNameSuccess(res)))
    .catch((error) => dispatch(getCharNameError(error)));
}