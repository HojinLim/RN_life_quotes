import {
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

import ModeSegment from '../components/ModeSegment';

import FavoriteCardDeck from '../components/FavoriteCardDeck';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AllCardDeck from '../components/AllCardDeck';
import {toggleMode} from '../redux/slices/settingSlice';
import {Mode} from '../types/settingType';
import {NativeSegmentedControlIOSChangeEvent} from '@react-native-segmented-control/segmented-control';
import ShuffleButton from '../components/ShuffleButton';

type Props = {};

const HomeScreen = (props: Props) => {
  const setting = useSelector((state: RootState) => state.settingSliceReducer);
  const dispatch = useDispatch();

  const handleSegmentChange = (
    newValue: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>,
  ) => {
    const mode_ = newValue.nativeEvent.value as Mode;
    dispatch(toggleMode(mode_));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ShuffleButton />
      {setting.mode === 'all' ? <AllCardDeck /> : <FavoriteCardDeck />}
      <ModeSegment onValueChange={handleSegmentChange} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85d6fc',
  },
});
