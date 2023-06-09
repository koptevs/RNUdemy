import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ChatSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChatSettingsScreen</Text>
    </View>
  );
};

export default ChatSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Thin',
    fontSize: 24,
  },
});
