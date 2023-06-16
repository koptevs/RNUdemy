import React, { useReducer, useCallback } from 'react';
import Input from './Input';
import { Feather } from '@expo/vector-icons';
import SubmiButton from './SubmiButton';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import { signUp } from '../utils/actions/authActions';

const SignInForm = () => {
  const initialState = {
    inputValues: {
      email: false,
      password: false,
    },
    inputValidities: {
      email: false,
      password: false,
    },
  };

  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const inputChangeHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({
        validationResult: result,
        inputId: inputId,
        inputValue: inputValue,
      });
    },
    [dispatchFormState],
  );

  const authHandler = () => {
    const { email, password } = formState.inputValues;
    signUp(email, password);
  };

  return (
    <>
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputChangeHandler}
        keyboardType="email-address"
        autoCapitalize="none"
        errorText={formState.inputValidities['email']}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        iconSize={24}
        autoCapitalize="none"
        secureTextEntry
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidities['password']}
      />
      <SubmiButton
        title="Sign in"
        onPress={authHandler}
        // disabled
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignInForm;
