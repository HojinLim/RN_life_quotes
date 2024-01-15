import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../redux/store';
import {shuffleAllQuotes} from '../redux/slices/allQuoteSlice';
import {shuffleFavoriteQuotes} from '../redux/slices/favoriteQuoteSlice';
import {isPortraitNow} from '../utils/isPortraitNow';

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const {mode} = useSelector((state: RootState) => state.settingSliceReducer);
  const favo = useSelector((state: RootState) => state.favoriteReducer);

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
  if (favo.length < 1 && mode === 'favorite') {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={shuffleHandler}
      style={isPortrait ? styles.shuffle : styles.landscape_shuffle}
      accessibilityLabel="Shuffle"
      aria-label="Shuffle">
      <Icon source={'shuffle'} size={24} />
    </TouchableOpacity>
  );
};

export default ShuffleButton;

const styles = StyleSheet.create({
  shuffle: {
    flex: 1,
    // overflow: 'hidden',
    position: 'absolute',
    marginTop: 550,
    alignItems: 'center',
    paddingTop: 5,
    alignSelf: 'center',
    minWidth: 55,
    minHeight: 55,
    zIndex: 4,
  },
  landscape_shuffle: {
    flex: 1,
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginStart: 50,
    marginTop: 50,
    minWidth: 55,
    minHeight: 55,
    zIndex: 4,
  },
});
