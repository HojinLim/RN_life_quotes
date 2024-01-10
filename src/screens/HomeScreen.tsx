import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Quote} from 'quotesy';

import {FAVORITE_QUOTES, QUOTES_LISTS} from '../constants/variable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getQuotesLists} from '../utils/storeQuotesTool';

import ModeSegment from '../components/ModeSegment';

import FavoriteCardDeck from '../components/FavoriteCardDeck';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AllCardDeck from '../components/AllCardDeck';
import {toggleMode} from '../redux/slices/settingSlice';
import {Mode} from '../types/settingType';
import {isPortraitNow} from '../utils/isPortraitNow';

type Props = {};

const HomeScreen = (props: Props) => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [all, setAll] = useState<Quote[]>([]);
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const value = useSelector((state: RootState) => state.settingSliceReducer);
  const setting = useSelector((state: RootState) => state.settingSliceReducer);
  const dispatch = useDispatch();
  const [isPortrait, setIsPotrait] = useState<boolean>();

  const {width, height} = useWindowDimensions();

  const fetchQuotes = async () => {
    try {
      const storedQuotes = await getQuotesLists();
      setAll(storedQuotes || []);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };
  useEffect(() => {
    setIsPotrait(isPortraitNow(width, height));
  }, [width, height]);

  const fetchFavorites = async () => {
    try {
      const strResult = await AsyncStorage.getItem(FAVORITE_QUOTES);
      const favoritesData = strResult ? JSON.parse(strResult) : null;
      setFavorites(favoritesData || []);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };
  const init = useCallback(() => {
    dispatch(toggleMode('all'));
  }, [dispatch]);

  useEffect(() => {
    init();
    fetchQuotes();
    fetchFavorites();
  }, [init]);

  useEffect(() => {}, [value]);

  useEffect(() => {
    setQuotes(setting.mode === 'all' ? all : favorites);
  }, [setting.mode, all, favorites]);

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
