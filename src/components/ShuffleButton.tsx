import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, Tooltip} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../redux/store';
import {shuffleAllQuotes} from '../redux/slices/allQuoteSlice';
import {shuffleFavoriteQuotes} from '../redux/slices/favoriteQuoteSlice';

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const {mode} = useSelector((state: RootState) => state.settingSliceReducer);

  const shuffleHandler = () => {
    if (mode === 'all') {
      dispatch(shuffleAllQuotes());
    } else if (mode === 'favorite') {
      dispatch(shuffleFavoriteQuotes());
    }
  };

  return (
    <Tooltip title="카드들을 섞습니다.">
      <IconButton
        icon={'shuffle-variant'}
        size={24}
        onPress={shuffleHandler}
        style={styles.shuffle}
      />
    </Tooltip>
  );
};

export default ShuffleButton;

const styles = StyleSheet.create({
  shuffle: {
    flex: 1,
    position: 'absolute',
    // bottom: -250,
    top: 550,
    // bottom: -150,
    // right: 0,
    // margin: 16,
    alignItems: 'center',
    paddingTop: 5,
  },
});
