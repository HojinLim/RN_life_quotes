import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {resetFavorite} from '../redux/slices/favoriteQuoteSlice';
import {removeAllStar} from '../redux/slices/allQuoteSlice';

const SettingScreen = () => {
  const dispatch = useDispatch();

  const removeFavoriteHandler = () => {
    Alert.alert('Warning!!', 'You really want to delete all favorite lists?', [
      {
        text: 'CANCEL',
        onPress: () => {
          return;
        },
      },
      {
        text: 'DELETE',
        onPress: () => {
          dispatch(resetFavorite());
          dispatch(removeAllStar());
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={removeFavoriteHandler}
        contentStyle={{
          minHeight: 52,
        }}>
        Reset ALL Favorite
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
