import React from 'react';
import { View, Text } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function DrawerNavDashboard() {
  const { Navigator, Screen } = createDrawerNavigator();

  const Paulo = () => <Text>Salve!</Text>;
  const Pedro = () => <Text>Pedro.</Text>;

  return (
    <DrawerContentScrollView>
      <DrawerItem label='Perfil' onPress={() => alert('perfil')} />
      <DrawerItem label='Toggle' onPress={() => alert('toggled')} />
    </DrawerContentScrollView>
  );
}
