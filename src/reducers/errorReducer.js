import {
  GET_ERRORS,
  GET_ERRORS_PENDING,
  GET_ERRORS_ERROR,
  CREATE_ERROR,
  CREATE_ERROR_PENDING,
  CREATE_ERROR_ERROR,
  GET_DISPLAY_ERROR,
  GET_DISPLAY_ERROR_PENDING,
  GET_DISPLAY_ERROR_ERROR
} from '../actions/errorActions';

const initialState = {
  errorList: [],
  loading: false,
  err: {},
  displayError: null
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    // get error list *****************
    case GET_ERRORS: 
      return { ...state, errorList: action.payload };
    case GET_ERRORS_PENDING:
      return { ...state, loading: true };
    case GET_ERRORS_ERROR:
      return { ...state, loading: false, error: action.payload };
      // new error *****************
    case CREATE_ERROR: 
      return { ...state, displayError: action.payload };
    case CREATE_ERROR_PENDING:
      return { ...state, loading: true };
    case CREATE_ERROR_ERROR:
      return { ...state, loading: false, error: action.payload };
      // error detail *****************
    case GET_DISPLAY_ERROR: 
      return { ...state, displayError: action.payload };
    case GET_DISPLAY_ERROR_PENDING:
      return { ...state, loading: true };
    case GET_DISPLAY_ERROR_ERROR:
      return { ...state, loading: false, error: action.payload };
    
    default: 
      return state;
  }
}
