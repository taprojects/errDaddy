import { createAction } from 'promise-middleware-redux';
import { 
  fetchErrors, 
  fetchErrorDetail, 
  sendNewError, 
  fetchAllTags 
} from '../services/errorServices';

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

export const [
  getDisplayError,
  GET_DISPLAY_ERROR,
  GET_DISPLAY_ERROR_PENDING,
  GET_DISPLAY_ERROR_ERROR
] = createAction('GET_DISPLAY_ERROR', fetchErrorDetail);

export const [
  getAllTags,
  GET_ALL_TAGS,
  GET_ALL_TAGS_PENDING,
  GET_ALL_TAGS_ERROR
] = createAction('GET_ALL_TAGS', fetchAllTags);



