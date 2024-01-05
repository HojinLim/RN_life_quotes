import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

type Props = {};
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = (props: Props) => {
  return (
    <View>
      <Text>TabNavigator</Text>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
