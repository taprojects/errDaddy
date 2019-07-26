const initialState = null;

export default function reducer(state = initialState, action) {
  console.log(action);
  if(action.type === 'SET_SEARCH_TERM') return action.payload.searchTerm;
  return state;
}
