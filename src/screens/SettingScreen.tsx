import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

import {Button} from 'react-native-paper';

import {
  addQuote,
  removeQuote,
  resetFavorite,
} from '../redux/slices/favoriteQuoteSlice';
import {resetQuotes} from '../redux/slices/allQuoteSlice';

type Props = {};

const SettingScreen = (props: Props) => {
  // const quotes = useSelector(
  //   (state: RootState) => state.allQuotesReducer,
  // );
  const value2 = useSelector((state: RootState) => state.favoriteReducer);
  console.log(value2);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        onPress={() => {
          dispatch(resetFavorite());
        }}>
        Reset
      </Button>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
