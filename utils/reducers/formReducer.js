export const reducer = (state, action) => {
  // const {inputValue, validationResult, inputId} =  action;
  const inputValue = action.inputValue;
  const validationResult = action.validationResult;
  const inputId = action.inputId;
  // console.log(validationResult);

  const updatedValues = {
    ...state.inputValues,
    [inputId]: inputValue,
  };

  const updatedValidities = {
    ...state.inputValidities,
    [inputId]: validationResult,
  };

  let updatedFormIsValid = true;
  for (const key in updatedValidities) {
    if (updatedValidities[key] !== undefined) {
      updatedFormIsValid = false;
      break;
    }
  }

  // console.log(updatedValues);

  return {
    ...state,
    inputValues: updatedValues,
    inputValidities: updatedValidities,
    formIsValid: updatedFormIsValid,
    // formIsValid: validationResult === undefined,
  };
};
