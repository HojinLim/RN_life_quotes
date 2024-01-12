import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import TabNavigator from './src/navigator/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

type Props = {};

const App = (props: Props) => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
