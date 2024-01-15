import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Swiper from 'react-native-deck-swiper';
import {Quote} from 'quotesy';
import QuoteCard from './QuoteCard';
import EmptyCard from './EmptyCard';

import ShuffleButton from './ShuffleButton';
import {RootState} from '../redux/store';
import {changeLike, removeStar} from '../redux/slices/allQuoteSlice';
import {addQuote, removeQuote} from '../redux/slices/favoriteQuoteSlice';

type Props = {};

const AllCardDeck = (props: Props) => {
  const quotes = useSelector((state: RootState) => state.allQuotesReducer);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  const onPressStar = (quote: Quote) => {
    const {favorite} = quote;

    if (favorite === false || favorite === undefined) {
      dispatch(changeLike(quote.text));
      dispatch(addQuote(quote));
    } else if (favorite === true) {
      dispatch(removeQuote(quote));
      dispatch(removeStar(quote));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {quotes.length > 0 ? (
        <Swiper
          ref={swiperRef}
          stackSize={2}
          infinite
          goBackToPreviousCardOnSwipeLeft
          goBackToPreviousCardOnSwipeTop
          animateCardOpacity
          cards={quotes}
          cardIndex={0}
          renderCard={(card: Quote, cardIndex: number) => {
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

      {/* <ShuffleButton /> */}
    </SafeAreaView>
  );
};

export default AllCardDeck;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#37b4e9',
  },
});
