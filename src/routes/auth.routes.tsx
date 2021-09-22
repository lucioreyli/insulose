import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Home/Dashboard';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

export default function Routes() {
  const Paulo = () => (
    <View>
      <Text>Salve!</Text>
    </View>
  );
  const Pedro = () => (
    <View>
      <Text>Pedro.</Text>
    </View>
  );

  const { Navigator, Screen } = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const { colors } = useTheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Screen name='Home' component={Home} />
        <Screen name='Dashboard' component={Dashboard} />
      </Navigator>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name='paulo' component={Paulo} />
        <Drawer.Screen name='pedro' component={Pedro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
