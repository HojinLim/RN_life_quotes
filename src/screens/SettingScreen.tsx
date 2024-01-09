import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-paper';

import {resetFavorite} from '../redux/slices/favoriteQuoteSlice';
import {removeAllStar} from '../redux/slices/allQuoteSlice';

type Props = {};

const SettingScreen = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        onPress={() => {
          dispatch(resetFavorite());
          dispatch(removeAllStar());
        }}>
        Reset ALL Favorite
      </Button>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
