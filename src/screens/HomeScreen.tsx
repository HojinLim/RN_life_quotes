import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import ModeSegment from '../components/ModeSegment';

import FavoriteCardDeck from '../components/FavoriteCardDeck';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AllCardDeck from '../components/AllCardDeck';
import {toggleMode} from '../redux/slices/settingSlice';
import {Mode} from '../types/settingType';

type Props = {};

const HomeScreen = (props: Props) => {
  const setting = useSelector((state: RootState) => state.settingSliceReducer);
  const dispatch = useDispatch();

  const handleSegmentChange = (newValue: string) => {
    const mode_ = newValue as Mode;
    dispatch(toggleMode(mode_));
  };

  return (
    <SafeAreaView style={styles.container}>
      {setting.mode === 'all' ? <AllCardDeck /> : <FavoriteCardDeck />}
      <ModeSegment onValueChange={handleSegmentChange} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
