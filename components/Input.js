import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { themePalette } from '../theme';

const Input = (props) => {
  const onChangeText = (text) => {
    props.onInputChanged(props.id, text);
  };

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 24}
            style={styles.icon}
          />
        )}
        <TextInput
          {...props}
          style={styles.input}
          selectionColor={themePalette.grey}
          onChangeText={onChangeText}
        />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          {/* <Text style={styles.errorText}>{props.errorText}</Text> */}
          <Text style={styles.errorText}>{props.errorText[0]}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginVertical: 8,
    fontFamily: 'Roboto-Bold',
    color: themePalette.textColor,
    letterSpacing: 0.2,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: themePalette.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: themePalette.grey,
    // backgroundColor: themePalette.textColor,
    padding: 10,
  },
  input: {
    paddingHorizontal: 10,
    color: themePalette.textColor,
    flex: 1,
    fontFamily: 'Roboto-Medium',
    letterSpacing: 0.2,
    paddingTop: 0,
  },
  errorContainer: {
    paddingVertical: 5,
  },
  errorText: {
    color: 'red',
    fontFamily: 'Roboto-Medium',
    letterSpacing: 0.2,
    fontSize: 12,
  },
});
