const initialState = 'recent';

export default function reducer(state = initialState, action) {
  if(action.type === 'SET_SEARCH_TERM') return action.payload.searchTerm;
  return state;
}
