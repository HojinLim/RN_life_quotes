import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {isPortraitNow} from '../utils/isPortraitNow';

type Props = {};

const EmptyCard = (props: Props) => {
  const [isPortrait, setIsPotrait] = useState<boolean>();
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    setIsPotrait(isPortraitNow(width, height));
  }, [width, height]);

  return (
    <View style={[styles.container, {marginTop: !isPortrait ? 60 : null}]}>
      <Icon
        style={styles.icon}
        name="face-dizzy"
        size={isPortrait ? 120 : 60}
      />
      <Text style={styles.text}>Oops! There are no cards</Text>
      {/* <Button style={styles.refresh} onPress={() => {}}>
        refresh
      </Button> */}
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
