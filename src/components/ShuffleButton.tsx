import {StyleSheet, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../redux/store';
import {shuffleAllQuotes} from '../redux/slices/allQuoteSlice';
import {shuffleFavoriteQuotes} from '../redux/slices/favoriteQuoteSlice';
import {isPortraitNow} from '../utils/isPortraitNow';

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const {mode} = useSelector((state: RootState) => state.settingSliceReducer);

  const {width, height} = useWindowDimensions();
  const [isPortrait, setIsPotrait] = useState<boolean>();

  useEffect(() => {
    setIsPotrait(isPortraitNow(width, height));
  }, [width, height]);

  //  모드에 따라 각 위치의 카드를 섞기
  const shuffleHandler = () => {
    if (mode === 'all') {
      dispatch(shuffleAllQuotes());
    } else if (mode === 'favorite') {
      dispatch(shuffleFavoriteQuotes());
    }
  };

  return (
    <IconButton
      icon={'shuffle-variant'}
      size={24}
      onPress={shuffleHandler}
      style={isPortrait ? styles.shuffle : styles.landscape_shuffle}
    />
  );
};

export default ShuffleButton;

const styles = StyleSheet.create({
  shuffle: {
    marginTop: 550,
    alignItems: 'center',
    paddingTop: 5,
    alignSelf: 'center',
  },
  landscape_shuffle: {
    alignContent: 'center',
    justifyContent: 'center',
    marginStart: 50,
    marginTop: 55,
  },
});
