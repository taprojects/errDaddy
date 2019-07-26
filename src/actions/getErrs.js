import { createAction } from 'promise-middleware-redux';
import { fetchErrors } from '../services/fetchErrors';

export const [
  getAssesByCourse,
  GET_ERRORS,
  GET_ERRORS_PENDING,
  GET_ERRORS_ERROR
] = createAction('GET_ERRORS', fetchErrors);
