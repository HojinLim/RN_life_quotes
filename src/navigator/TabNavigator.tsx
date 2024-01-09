import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import {isPortraitNow} from '../utils/isPortraitNow';

type Props = {};
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = (props: Props) => {
  // const [portrait, setPortrait] = useState<boolean>();
  // useEffect(() => {
  //   setPortrait(isPortraitNow());
  //   console.log(portrait);
  // }, [portrait]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: 'home'}}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{tabBarIcon: 'cog'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
