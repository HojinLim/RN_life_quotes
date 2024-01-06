import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabNavigator from './src/navigator/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';

type Props = {};

const App = (props: Props) => {
  return (
    <Provider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
