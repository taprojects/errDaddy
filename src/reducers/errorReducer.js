import {
  GET_ERRORS,
  GET_ERRORS_PENDING,
  GET_ERRORS_ERROR,
  CREATE_ERROR,
  CREATE_ERROR_PENDING,
  CREATE_ERROR_ERROR,
  GET_DISPLAY_ERROR,
  GET_DISPLAY_ERROR_PENDING,
  GET_DISPLAY_ERROR_ERROR,
  GET_ALL_TAGS,
  GET_ALL_TAGS_PENDING,
  GET_ALL_TAGS_ERROR
} from '../actions/errorActions';

const initialState = {
  errorList: [],
  loading: false,
  err: {},
  displayError: null,
  tags: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // get error list *****************
    // get error list *****************
    // get error list *****************
    case GET_ERRORS: 
      if(action.payload.length === 0) return { ...state, errorList: [{ title: 'NO ERRORS FOR THIS TAG' }] };
      return { ...state, errorList: action.payload };
    case GET_ERRORS_PENDING:
      return { ...state, loading: true };
    case GET_ERRORS_ERROR:
      return { ...state, loading: false, error: action.payload };
      // new error *****************
      // new error *****************
      // new error *****************
    case CREATE_ERROR: 
      return { ...state, displayError: action.payload };
    case CREATE_ERROR_PENDING:
      return { ...state, loading: true };
    case CREATE_ERROR_ERROR:
      return { ...state, loading: false, error: action.payload };
      // error detail *****************
      // error detail *****************
      // error detail *****************
    case GET_DISPLAY_ERROR: 
      return { ...state, displayError: action.payload };
    case GET_DISPLAY_ERROR_PENDING:
      return { ...state, loading: true };
    case GET_DISPLAY_ERROR_ERROR:
      return { ...state, loading: false, error: action.payload };
      // all tags *****************
      // all tags *****************
      // all tags *****************
    case GET_ALL_TAGS: 
      return { ...state, tags: action.payload };
    case GET_ALL_TAGS_PENDING:
      return { ...state, loading: true };
    case GET_ALL_TAGS_ERROR:
      return { ...state, loading: false, error: action.payload };
    
    default: 
      return state;
  }
}
