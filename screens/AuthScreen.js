import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScreenContainer from '../components/ScreenContainer';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import { themePalette } from '../theme';
import logo from '../assets/images/logo.png';
import { ScrollView } from 'react-native';

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContainer>
        <ScrollView>
          <KeyboardAvoidingView
            style={styles.keyboardavoidingview}
            behavior={Platform.OS === 'ios' ? 'height' : undefined}
            keyboardVerticalOffset={100}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={logo} />
            </View>
            {isSignUp ? <SignUpForm /> : <SignInForm />}
            <TouchableOpacity
              onPress={() => setIsSignUp((prevState) => !prevState)}
              style={styles.linkContainer}>
              <Text style={styles.link}>{`Swith to ${
                isSignUp ? 'sign in' : 'sign up'
              }`}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  link: {
    color: themePalette.blue,
    letterSpacing: 0.2,
    fontFamily: 'Roboto-Medium',
  },
  imageContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  keyboardavoidingview: {
    flex: 1,
    justifyContent: 'center',
  },
});
