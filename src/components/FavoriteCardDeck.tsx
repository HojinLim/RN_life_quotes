import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import Swiper from 'react-native-deck-swiper';
import {Quote} from 'quotesy';
import QuoteCard from './QuoteCard';
import EmptyCard from './EmptyCard';
import {removeQuote} from '../redux/slices/favoriteQuoteSlice';
import {removeStar} from '../redux/slices/allQuoteSlice';

const FavoriteCardDeck = () => {
  const favoriteQuotes = useSelector(
    (state: RootState) => state.favoriteReducer,
  );

  const swiperRef = useRef<Swiper<Quote>>(null);
  const [cardLength, setCardLength] = useState<number>(0);

  useEffect(() => {
    setCardLength(favoriteQuotes.length);
  }, [favoriteQuotes.length]);

  const dispatch = useDispatch();

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

  return (
    <SafeAreaView
      style={[
        favoriteQuotes.length < 1
          ? [styles.container, {flex: 1}]
          : styles.container,
      ]}>
      {favoriteQuotes.length > 0 ? (
        <Swiper
          stackAnimationFriction={5}
          infinite
          goBackToPreviousCardOnSwipeLeft
          goBackToPreviousCardOnSwipeTop
          cards={favoriteQuotes}
          animateCardOpacity
          // 최대 스택 크기 5
          stackSize={favoriteQuotes.length > 5 ? 5 : favoriteQuotes.length}
          ref={swiperRef}
          cardIndex={0}
          // 카드가 한 개뿐이면 움직면 멈추기
          disableRightSwipe={cardLength > 1 ? false : true}
          disableLeftSwipe={cardLength > 1 ? false : true}
          disableBottomSwipe={cardLength > 1 ? false : true}
          disableTopSwipe={cardLength > 1 ? false : true}
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

      {/* {cardLength > 0 && <ShuffleButton />} */}
    </SafeAreaView>
  );
};

export default FavoriteCardDeck;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
