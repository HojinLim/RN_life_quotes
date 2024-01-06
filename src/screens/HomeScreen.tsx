import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Quote} from 'quotesy';

import {FAVORITE_QUOTES, QUOTES_LISTS} from '../constants/variable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getQuotesLists, setQuotesLists} from '../utils/storeQuotesTool';
import QuoteCard from '../components/QuoteCard';

import {Button, IconButton, ThemeProvider, Tooltip} from 'react-native-paper';
import Swiper from 'react-native-deck-swiper';
import ModeSegment from '../components/ModeSegment';
import EmptyCard from '../components/EmptyCard';
import {shuffleArray} from '../utils/shuffleArrayUtil';

type Props = {};

const HomeScreen = (props: Props) => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [all, setAll] = useState<Quote[]>([]);
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [mode, setMode] = useState<string>('all');

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
    setQuotes(mode === 'all' ? all : favorites);
  }, [mode, all, favorites]);

  const handleSegmentChange = (newValue: string) => {
    setMode(newValue);
  };

  const onPressStar = async (text: string) => {
    setAll(prevQuotes => {
      const updatedQuotes = [...(prevQuotes || [])];
      const quoteIndex = updatedQuotes.findIndex(quote => quote?.text === text);

      if (quoteIndex !== -1) {
        updatedQuotes[quoteIndex] = {
          ...updatedQuotes[quoteIndex],
          favorite: !updatedQuotes[quoteIndex].favorite,
        };

        setFavorites(prevFavorites =>
          updatedQuotes[quoteIndex].favorite
            ? [...(prevFavorites || []), updatedQuotes[quoteIndex]]
            : prevFavorites?.filter(quote => quote?.text !== text) || [],
        );

        // setFavorites 이후에 AsyncStorage.setItem 호출
        setFavorites(prevFavorites => {
          // 좋아요를 누른 목록을 AsyncStorage에 저장
          AsyncStorage.setItem(
            FAVORITE_QUOTES,
            JSON.stringify(prevFavorites || []),
          );
          return prevFavorites;
        });

        // setAll 이후에 QUOTES_LISTS에 대한 AsyncStorage 업데이트
        AsyncStorage.setItem(QUOTES_LISTS, JSON.stringify(updatedQuotes));
        setQuotes(updatedQuotes);
      }

      return updatedQuotes;
    });
  };

  const shuffleHandler = async () => {
    if (quotes) {
      const shuffled = shuffleArray(quotes);
      setQuotes(shuffled);
      await AsyncStorage.setItem(QUOTES_LISTS, JSON.stringify(shuffled));
    }
  };
  console.log(quotes);
  console.log(mode);

  return (
    <SafeAreaView style={styles.container}>
      {quotes && quotes.length > 0 ? (
        <Swiper
          infinite
          goBackToPreviousCardOnSwipeLeft
          cards={quotes}
          renderCard={(card: Quote, cardIndex: number) => (
            <QuoteCard
              quote={card}
              cardIndex={cardIndex}
              onPressStar={onPressStar}
              mode={mode}
            />
          )}
        />
      ) : (
        <EmptyCard />
      )}
      <ModeSegment onValueChange={handleSegmentChange} />
      {mode === 'all' && (
        <Tooltip title="카드들을 섞습니다.">
          <IconButton
            icon={'shuffle-variant'}
            size={24}
            onPress={shuffleHandler}
            style={styles.shuffle}
          />
        </Tooltip>
      )}
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
    // bottom: -250,
    top: 550,
    // bottom: -150,
    // right: 0,
    // margin: 16,
    alignItems: 'center',
    paddingTop: 5,
  },
});
