import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabNavigator from './src/navigator/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
