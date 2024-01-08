import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import Swiper from 'react-native-deck-swiper';
import {Quote} from 'quotesy';
import QuoteCard from './QuoteCard';
import EmptyCard from './EmptyCard';

type Props = {};

const FavoriteCardDeck = (props: Props) => {
  const favoriteQuotes = useSelector(
    (state: RootState) => state.favoriteReducer,
  );
  const onPressStar = () => {};
  console.log(favoriteQuotes.length);
  return (
    <SafeAreaView style={styles.container}>
      {favoriteQuotes.length > 0 ? (
        <Swiper
          infinite
          goBackToPreviousCardOnSwipeLeft
          cards={favoriteQuotes}
          renderCard={(card: Quote, cardIndex: number) => (
            <QuoteCard
              quote={card}
              cardIndex={cardIndex}
              onPressStar={onPressStar}
            />
          )}
        />
      ) : (
        <EmptyCard />
      )}
    </SafeAreaView>
  );
};

export default FavoriteCardDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
