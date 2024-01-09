import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import Swiper from 'react-native-deck-swiper';
import {Quote} from 'quotesy';
import QuoteCard from './QuoteCard';
import EmptyCard from './EmptyCard';
import {removeQuote} from '../redux/slices/favoriteQuoteSlice';
import {removeStar} from '../redux/slices/allQuoteSlice';
import ShuffleButton from './ShuffleButton';

type Props = {};

const FavoriteCardDeck = (props: Props) => {
  const favoriteQuotes = useSelector(
    (state: RootState) => state.favoriteReducer,
  );
  const swiperRef = useRef<Swiper<Quote>>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Track the current card index
  const swiperState = (swiperRef.current?.state as any) || {};

  const dispatch = useDispatch();
  console.log('현재 위치:', swiperState?.firstCardIndex);
  const onPressStar = (quote: Quote) => {
    dispatch(removeQuote(quote));
    dispatch(removeStar(quote));

    const curCardIndex = (swiperRef.current?.state as any)?.firstCardIndex;
    // 현재 보는 카드의 인덱스가 0이 아니고,
    // 뒤에 카드가 없을때, 인덱스 -1 로 위치 변경
    if (curCardIndex !== 0 && curCardIndex === favoriteQuotes.length - 1) {
      swiperRef.current?.jumpToCardIndex(curCardIndex - 1);
    }
  };

  console.log(favoriteQuotes);
  return (
    <SafeAreaView style={styles.container}>
      {favoriteQuotes.length > 0 ? (
        <Swiper
          stackAnimationFriction={5}
          infinite
          goBackToPreviousCardOnSwipeLeft
          cards={favoriteQuotes}
          // 최대 스택 크기 5
          stackSize={favoriteQuotes.length > 5 ? 5 : favoriteQuotes.length}
          ref={swiperRef}
          cardIndex={currentCardIndex}
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
      <ShuffleButton />
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
