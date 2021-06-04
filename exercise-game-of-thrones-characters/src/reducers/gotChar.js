import {  GET_CHAR_NAME, GET_CHAR_NAME_SUCCESS, GET_CHAR_NAME_ERROR} from '../actions';

const INITIAL_STATE = {
  character: '',
  loading: false,
  error: null,
}

const gotChar = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_CHAR_NAME: 
      return {
        ...state,
        loading: true,
      };
    case GET_CHAR_NAME_SUCCESS:
    return {
      ...state,
      loading: false,
      character: action.payload[0],
    }
    case GET_CHAR_NAME_ERROR: 
    return {
      ...state,
      loading: false,
      error: action.payload,
    }
    default:
      return state;
  }
}

export default gotChar;
