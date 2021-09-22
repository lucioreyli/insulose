import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import IllustrationImg from '../../assets/background.png';
import LogoImg from '../../assets/insuloselogo.png';
import ButtonHome from '../../components/ButtonHome';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
export default function Home() {
  const [pressed, setPressed] = useState(true);

  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <StatusBar style={'light'} />
        <ImageBackground source={IllustrationImg} style={styles.image}>
          <View style={styles.logoContainer}>
            <Image source={LogoImg} />
            <Text style={styles.logoFont}>
              {pressed ? 'Insulose' : 'Toque na logo'}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonHome nome='entrar' onPress={handleSignIn} />
            <ButtonHome nome='cadastrar' />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02005F',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: '20%',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFont: {
    color: colors.button,
    fontFamily: fonts.logo,
    fontSize: 40,
    marginTop: 38,
  },
  buttonsContainer: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
