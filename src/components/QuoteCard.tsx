import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Quote} from 'quotesy';
import {Card, Paragraph, Surface, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialIcons';

type QuoteCardProps = {
  quote: Quote;
};

const QuoteCard = (props: QuoteCardProps) => {
  const {text, author, source, tags} = props.quote;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>
          <Icon name="quote-left" size={24} />
          {text} <Icon style={styles.quote} name="quote-right" size={24} />
        </Title>

        <Paragraph style={styles.author}>- {author}</Paragraph>
        {source && <Paragraph>Source: {source}</Paragraph>}
        {tags && (
          <Paragraph>
            <Icon style={styles.quote} name="hashtag" size={18} />
            {tags}
          </Paragraph>
        )}
      </Card.Content>
    </Card>
  );
};

export default QuoteCard;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    height: '80%',
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
    alignItems: 'center',
    justifyContent: 'center',

    // marginBottom: 50,
  },

  quote: {
    marginStart: 25,
  },
});
