import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Quote} from 'quotesy';
import {Card, IconButton, Paragraph, Surface, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {isPortraitNow} from '../utils/isPortraitNow';

type QuoteCardProps = {
  cardIndex: number;
  quote: Quote;
  onPressStar: (text: Quote) => void;
  mode?: string;
};

const QuoteCard = (props: QuoteCardProps) => {
  const [isPressEnabled, setPressEnabled] = useState(true);
  const {quote, cardIndex} = props;
  const {width, height} = useWindowDimensions();
  const [isPortrait, setIsPotrait] = useState<boolean>();
  const setting = useSelector((state: RootState) => state.settingSliceReducer);

  // 불필요한 계산을 줄이기 위해
  useMemo(() => {
    setIsPotrait(isPortraitNow(width, height));
  }, [width, height]);

  if (!quote) {
    return null;
  }

  const {text, author, source, tags, favorite} = quote;

  const handlePress = (value: Quote) => {
    if (isPressEnabled) {
      setPressEnabled(false);

      props.onPressStar(value);

      // 버튼 딜레이
      setTimeout(() => {
        setPressEnabled(true);
      }, 1000);
    }
  };

  return (
    <Card
      style={{
        ...styles.card,
        marginTop: isPortrait ? 70 : 30,
        paddingVertical: isPortrait ? 35 : 0,
        backgroundColor: setting.mode === 'favorite' ? 'beige' : 'white',
      }}>
      {setting.mode === 'favorite' && (
        <Icon style={styles.pin} name="thumb-tack" size={24} />
      )}

      <Card.Content style={styles.cardContent}>
        <Title style={[styles.title, {fontSize: isPortrait ? 22 : 16}]}>
          <Icon name="quote-left" size={24} />
          {'  ' + text + '  '}
          <Icon style={styles.quote} name="quote-right" size={24} />
        </Title>
        {/* 현재 카드 인덱스 */}
        {/* <Paragraph style={styles.author}>{num}</Paragraph> */}
        <Paragraph style={styles.author}>- {author}</Paragraph>

        {/* {source && <Paragraph>Source: {source}</Paragraph>} */}
        {tags && (
          <Paragraph style={styles.tag}>
            <Icon name="hashtag" size={18} />
            {tags}
          </Paragraph>
        )}
      </Card.Content>
      <IconButton
        icon={favorite ? 'star' : 'star-outline'}
        iconColor="gold"
        size={28}
        onPress={() => handlePress(quote)}
        style={[styles.iconButton]}
      />
    </Card>
  );
};

export default QuoteCard;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    height: '65%',
    borderColor: 'black',
    borderWidth: 1,

    // paddingVertical: 35,
  },
  title: {
    fontWeight: '800',
    // fontSize: 22,
    paddingVertical: 5,
    marginVertical: 25,
  },
  author: {
    fontWeight: '600',
    fontSize: 16,
    color: 'gray',
  },
  surface: {
    flex: 1,
    padding: 8,

    // marginBottom: 50,
  },
  tag: {},

  quote: {
    marginStart: 25,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardContent: {
    flexDirection: 'column',
  },
  iconButton: {
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // margin: 16,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    verticalAlign: 'bottom',
    marginTop: 'auto',

    marginEnd: 15,
  },
  pin: {
    marginStart: 10,
  },
});
