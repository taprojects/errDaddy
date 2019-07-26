import errs from '../../data/seedErrs';

export function fetchErrors(searchTerm) {
  switch(searchTerm) {
    case 'recent':
      return {
        errors: errs
      };
    default:
      return {
        errors: [
          {
            title: 'searched term',
            good: 1,
            bad: 1
          }
        ]
      };
  }
} 

export function sendNewError({ title, errCode, description, solution, tags }) {
  return { title, errCode, description, solution, tags };
}
