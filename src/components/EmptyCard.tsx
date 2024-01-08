import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Button} from 'react-native-paper';
type Props = {};

const EmptyCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="face-dizzy" size={120} />
      <Text style={styles.text}>Oops! There are no cards</Text>
      <Button style={styles.refresh} onPress={() => {}}>
        refresh
      </Button>
    </View>
  );
};

export default EmptyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon: {alignSelf: 'center'},

  text: {
    fontSize: 25,
    marginVertical: 25,
    alignSelf: 'center',
  },
  refresh: {
    fontSize: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
});
