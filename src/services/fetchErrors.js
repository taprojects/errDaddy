import { errs } from '../../data/seedErrs';

export function fetchErrors(searchterm) {
  switch(searchterm) {
    case 'recent':
      return errs;
  }
} 
