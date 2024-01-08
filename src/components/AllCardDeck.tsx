import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Swiper from 'react-native-deck-swiper';
import {Quote} from 'quotesy';
import QuoteCard from './QuoteCard';
import EmptyCard from './EmptyCard';

import ShuffleButton from './ShuffleButton';
import {RootState} from '../redux/store';
import {changeLike} from '../redux/slices/allQuoteSlice';
import {addQuote} from '../redux/slices/favoriteQuoteSlice';

type Props = {};

const AllCardDeck = (props: Props) => {
  const quotes = useSelector((state: RootState) => state.allQuotesReducer);

  const dispatch = useDispatch();
  const onPressStar = (value: Quote) => {
    dispatch(changeLike(value.text));
    dispatch(addQuote(value));
  };

  return (
    <SafeAreaView style={styles.container}>
      {quotes ? (
        <Swiper
          infinite
          goBackToPreviousCardOnSwipeLeft
          cards={quotes}
          renderCard={(card: Quote, cardIndex: number) => {
            console.log('Card Index:', cardIndex);

            return (
              <QuoteCard
                quote={card}
                cardIndex={cardIndex}
                onPressStar={onPressStar}
              />
            );
          }}
        />
      ) : (
        <EmptyCard />
      )}
    </SafeAreaView>
  );
};

export default AllCardDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
