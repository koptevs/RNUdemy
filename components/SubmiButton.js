import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { themePalette } from '../theme';

const SubmiButton = (props) => {
  const [pressed, setPressed] = useState(false);
  //   const enabledBgColor = props.color || themePalette.primary;
  //   const disabledBgColor = themePalette.lightGrey;
  //   const bg = props.disabled ? disabledBgColor : enabledBgColor;

  const bg = props.disabled
    ? themePalette.lightGrey
    : props.color
    ? props.color
    : themePalette.primary;

  return (
    <Pressable
      style={{
        ...styles.button,
        ...props.style,
        backgroundColor: bg,
      }}
      onPress={props.disabled ? () => {} : props.onPress}>
      <Text style={{ color: props.disabled ? themePalette.grey : 'white' }}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default SubmiButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
