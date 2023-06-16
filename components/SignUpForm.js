import React, { useCallback, useReducer } from 'react';
import Input from './Input';
import { Feather } from '@expo/vector-icons';
import SubmiButton from './SubmiButton';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import { signUp } from '../utils/actions/authActions';

const SignUpForm = () => {
  const initialState = {
    inputValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    inputValidities: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    },
    formIsValid: false,
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
    const { firstName, lastName, email, password } = formState.inputValues;
    signUp(firstName, lastName, email, password);
  };

  return (
    <>
      <Input
        id="firstName"
        label="First name"
        icon="user"
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        errorText={formState.inputValidities['firstName']}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user"
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        errorText={formState.inputValidities['lastName']}
      />
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
        title="Sign up"
        onPress={authHandler}
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
