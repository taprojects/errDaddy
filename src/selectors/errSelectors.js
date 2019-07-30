export const selectErrors = state => state.errorReducer.errorList || [];
export const selectDisplay = state => state.errorReducer.displayError;
export const selectTags = state => state.errorReducer.tags;
