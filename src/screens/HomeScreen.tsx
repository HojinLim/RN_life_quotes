import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Quote} from 'quotesy';

import {FAVORITE_QUOTES, QUOTES_LISTS} from '../constants/variable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getQuotesLists} from '../utils/storeQuotesTool';

import ModeSegment from '../components/ModeSegment';

import FavoriteCardDeck from '../components/FavoriteCardDeck';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AllCardDeck from '../components/AllCardDeck';
import ShuffleButton from '../components/ShuffleButton';

type Props = {};

const HomeScreen = (props: Props) => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [all, setAll] = useState<Quote[]>([]);
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [mode, setMode] = useState<string>('all');
  const value = useSelector((state: RootState) => state.settingSliceReducer);

  const fetchQuotes = async () => {
    try {
      const storedQuotes = await getQuotesLists();
      setAll(storedQuotes || []);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const strResult = await AsyncStorage.getItem(FAVORITE_QUOTES);
      const favoritesData = strResult ? JSON.parse(strResult) : null;
      setFavorites(favoritesData || []);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
    fetchFavorites();
  }, []);

  useEffect(() => {
    console.log('Updated Redux State:', value);
  }, [value]);

  useEffect(() => {
    setQuotes(mode === 'all' ? all : favorites);
  }, [mode, all, favorites]);

  const handleSegmentChange = (newValue: string) => {
    setMode(newValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ShuffleButton />
      {mode === 'all' ? <AllCardDeck /> : <FavoriteCardDeck />}

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
  shuffle: {
    flex: 1,
    position: 'absolute',
    top: 550,
    alignItems: 'center',
    paddingTop: 5,
  },
});
