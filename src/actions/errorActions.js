import { createAction } from 'promise-middleware-redux';
import { fetchErrors, sendNewError } from '../services/errorServices';

export const [
  getErrors,
  GET_ERRORS,
  GET_ERRORS_PENDING,
  GET_ERRORS_ERROR
] = createAction('GET_ERRORS', fetchErrors);

export const [
  createNewError,
  CREATE_ERROR,
  CREATE_ERROR_PENDING,
  CREATE_ERROR_ERROR
] = createAction('CREATE_ERROR', sendNewError);



