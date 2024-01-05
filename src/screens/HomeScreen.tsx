import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import quotes, {Quote} from 'quotesy';

import {QUOTES_LISTS} from '../constants/variable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getQuotesLists, setQuotesLists} from '../utils/storeQuotesTool';
import QuoteCard from '../components/QuoteCard';

import {Button} from 'react-native-paper';
import Swiper from 'react-native-deck-swiper';

type Props = {};

const HomeScreen = (props: Props) => {
  const [quotes, setQuotes] = useState<Quote[] | undefined>(undefined);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const storedQuotes = await getQuotesLists();

        if (storedQuotes) {
          console.log('저장된 값이 이미 있습니다.');
          setQuotes(storedQuotes);
        } else {
          console.log('저장된 값이 없으므로 새로 데이터를 저장합니다.');
          await setQuotesLists();
          const newQuotes = await getQuotesLists();
          setQuotes(newQuotes);
        }
      } catch (error) {
        console.error('Error fetching or setting quotes:', error);
      }
    };

    // Call the fetchQuotes function when the component mounts
    fetchQuotes();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  console.log(quotes);

  return (
    <SafeAreaView style={styles.container}>
      {quotes ? (
        <Swiper
          cards={quotes}
          renderCard={(card: Quote) => <QuoteCard quote={card} />}
        />
      ) : null}
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
