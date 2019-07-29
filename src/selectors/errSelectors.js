export const selectErrors = state => state.errorReducer.errorList.errors || [];
export const selectNewError = state => state.errorReducer.displayError;
