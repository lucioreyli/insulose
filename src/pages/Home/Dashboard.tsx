import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
// import SendIntentAndroid from 'react-native-send-intent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IllustrationImg from '../../assets/background.png';
import LogoImg from '../../assets/insuloselogo.png';
import ButtonHome from '../../components/ButtonHome';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import Constants from 'expo-constants';
import CardHome from '../../components/CardHome';
import CardFooter from '../../components/CardFooter';
import DrawerNavDashboard from '../../components/drawer.routes';

export default function Dashboard() {
  const [pressed, setPressed] = useState(false);

  return (
    <LinearGradient
      colors={['#680279', '#53197A', '#38197A', '#082F7B', '#0400D7']}
      style={styles.container}
    >
      <StatusBar style={'light'} />
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name='menu' size={42} color='white' />
        </TouchableOpacity>
        <Image source={LogoImg} width={58} height={58} style={styles.logo} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameHello}>{`Olá, Meison`}</Text>
        <Text style={styles.nameWelcome}>{`Seja bem vindo`}</Text>
      </View>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        endFillColor={'transparent'}
        style={styles.bodyContainer}
        overScrollMode={'never'}
      >
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        >
          <CardHome
            title='Glicemia'
            // onPress={() => alert('menu sobre glicemia')}
            height={160}
          />
          <CardHome title='Alarme' />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        >
          <CardHome title='Remédios' height={160} />
          <CardHome
            title='Consultas'
            // onPress={() => Linking.openURL('whatsapp://app')}
          />
        </View>
        <View style={styles.footerContainer}>
          <CardFooter title='Atividade física' />
          <CardFooter title='Refeições' />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02005F',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  logo: {
    height: 58,
    width: 58,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 58,
    height: 58,
  },
  topBar: {
    marginTop: Constants.statusBarHeight + 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameContainer: {
    marginBottom: 20,
  },
  nameHello: {
    color: 'white',
    fontFamily: fonts.bold,
    fontSize: 35,
    lineHeight: 52,
  },
  nameWelcome: {
    color: 'white',
    fontFamily: fonts.name,
    fontSize: 15,
    lineHeight: 20,
  },
  bodyContainer: {
    alignSelf: 'center',
    width: '100%',
  },
  footerContainer: {
    marginTop: 20,
  },
});
