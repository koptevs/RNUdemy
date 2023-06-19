import React, { useCallback, useEffect, useReducer, useState } from 'react';
import Input from './Input';
import { Feather } from '@expo/vector-icons';
import SubmiButton from './SubmiButton';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import { signUp } from '../utils/actions/authActions';
import { async } from 'validate.js';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { themePalette } from '../theme';

const SignUpForm = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    if (error) {
      console.log(error);
      Alert.alert('Произошла ашипка', error, [{ text: 'Не дурак - понял' }]);
      setError(null);
    }
  }, [error]);

  const authHandler = async () => {
    const { firstName, lastName, email, password } = formState.inputValues;
    try {
      setIsLoading(true);
      await signUp(email, password, firstName, lastName);
      // setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
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
      {isLoading ? (
        <ActivityIndicator
          size={50}
          color={themePalette.primary}
          style={{ marginTop: 15 }}
        />
      ) : (
        <SubmiButton
          title="Sign up"
          onPress={authHandler}
          style={{ marginTop: 20 }}
          disabled={!formState.formIsValid}
        />
      )}
    </>
  );
};

export default SignUpForm;
