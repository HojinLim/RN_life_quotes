import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Quote} from 'quotesy';
import {Card, IconButton, Paragraph, Surface, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon as Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

type QuoteCardProps = {
  cardIndex: number;
  quote: Quote;
  onPressStar: (text: Quote) => void;
  mode?: string;
};

const QuoteCard = (props: QuoteCardProps) => {
  const [isPressEnabled, setPressEnabled] = useState(true);
  const {quote} = props;
  // const dispatch = useDispatch();
  const setting = useSelector((state: RootState) => state.settingSliceReducer);
  // Check if quote is undefined or null
  if (!quote) {
    return null;
  }

  const {text, author, source, tags, favorite} = quote;
  const num = props.cardIndex;
  const mode = props.mode;
  console.log(num);
  const handlePress = (value: Quote) => {
    if (isPressEnabled) {
      // Disable further presses
      setPressEnabled(false);

      // Your logic here
      props.onPressStar(value);

      // Enable presses after a delay (e.g., 2000 milliseconds)
      setTimeout(() => {
        setPressEnabled(true);
      }, 1000);
    }
  };

  return (
    <Card
      style={{
        ...styles.card,
        backgroundColor: setting.mode === 'favorite' ? 'beige' : 'white',
      }}>
      {setting.mode === 'favorite' && (
        <Icon style={styles.pin} name="thumb-tack" size={24} />
      )}

      <Card.Content style={styles.cardContent}>
        <Title style={styles.title}>
          <Icon name="quote-left" size={24} />
          {'  ' + text + '  '}
          <Icon style={styles.quote} name="quote-right" size={24} />
        </Title>
        <Paragraph style={styles.author}>{num}</Paragraph>
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
        style={styles.iconButton}
      />
    </Card>
  );
};

export default QuoteCard;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    height: '60%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 70,
    paddingVertical: 30,
  },
  title: {
    fontWeight: '800',
    fontSize: 22,
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
  tag: {
    marginVertical: 15,
  },

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
