export const selectErrors = state => state.errorReducer.errorList || [];
export const selectNewError = state => state.errorReducer.displayError;
