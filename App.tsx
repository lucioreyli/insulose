import React from 'react';
import { View } from 'react-native';
import Home from './src/pages/Home/Home';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { SecularOne_400Regular } from '@expo-google-fonts/secular-one';
import AppLoading from 'expo-app-loading';
import Dashboard from './src/pages/Home/Dashboard';
import Routes from './src/routes/auth.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    SecularOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Routes />
      </>
    );
  }
}
