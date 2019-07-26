import {
  GET_ERRORS,
  GET_ERRORS_PENDING,
  GET_ERRORS_ERROR
} from '../actions/getErrs';

const initialState = {
  errorList: [],
  loading: false,
  err: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_ERRORS: 
      return { ...state, errorList: action.payload };
    case GET_ERRORS_PENDING:
      return { ...state, loading: true };
    case GET_ERRORS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
