import React from 'react';
import Input from './Input';
import { Feather } from '@expo/vector-icons';
import SubmiButton from './SubmiButton';
import { validateInput } from '../utils/actions/formActions';

const SignUpForm = () => {
  const inputChangeHandler = (inputId, inputValue) => {
    console.log(validateInput(inputId, inputValue));
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
        //   errorText="Some error"
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user"
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        //   errorText="Some error"
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
        //   errorText="Some error"
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
        //   errorText="Some error"
      />
      <SubmiButton
        title="Sign up"
        onPress={() => console.log('pressed!!!')}
        // disabled
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
