import React, { useCallback, useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons, Feather } from '@expo/vector-icons';

import { themePalette } from '../theme';
import backgroundImage from '../assets/images/droplet.jpeg';

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState('');

  const sendMessage = useCallback(() => {
    console.log('Sending message -> ', messageText);
    setMessageText('');
  }, [messageText]);

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.container}>
      {/* <KeyboardAvoidingView></KeyboardAvoidingView> lesson 39 - for IOS devices to show keyboard*/}
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Text style={styles.text}>ChatScreen{messageText}</Text>
      </ImageBackground>
      <View style={styles.inputContainer}>
        <Pressable
          onPress={() => console.log('Plus button pressed')}
          // style={({ pressed }) => [
          //   {
          //     backgroundColor: pressed ? 'red' : 'lime',
          //   },
          //   styles.iconContainer,
          // ]}
          // children={Feather}>
          style={styles.iconContainer}>
          <Feather name="plus" size={24} color={themePalette.blue} />
        </Pressable>
        <TextInput
          onChangeText={(text) => setMessageText(text)}
          onSubmitEditing={sendMessage}
          style={styles.textInput}
          value={messageText}
        />
        {messageText === '' && (
          <Pressable
            onPress={() => console.log('Camera button pressed!!!')}
            style={styles.iconContainer}>
            <Feather name="camera" size={24} color={themePalette.blue} />
          </Pressable>
        )}

        {messageText !== '' && (
          <Pressable onPress={sendMessage} style={styles.iconContainer}>
            <Feather name="send" size={24} color={themePalette.blue} />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const button = StyleSheet.create({
  base: {
    height: 50,
    paddingHorizontal: 23,
    justifyContent: 'center',
  },
  red: {
    backgroundColor: 'tomato',
  },
  green: {
    backgroundColor: '#33aa33',
  },
  lightText: {
    color: 'white',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    // marginTop: 500,
    fontFamily: 'Roboto-Thin',
    fontSize: 48,
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  textInput: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: themePalette.lightGrey,
    paddingHorizontal: 20,
    paddingVertical: 8,
    height: 45,
  },
  iconContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    // backgroundColor: 'tomato',
  },
});
