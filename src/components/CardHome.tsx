import React, { Children } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import fonts from '../constants/fonts';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type CardProps = TouchableOpacityProps & {
  title: string;
  height?: number;
};

export default function CardHome({ title, height, ...rest }: CardProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          height: height || '80%',
          width: 140,
        },
      ]}
      {...rest}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{title} </Text>
        {title === 'Glicemia' ? (
          <Ionicons name='water' size={24} color='white' />
        ) : title === 'Alarme' ? (
          <Ionicons name='alarm' size={24} color='white' />
        ) : title === 'Remédios' ? (
          <Ionicons name='medkit' size={24} color='white' />
        ) : title === 'Consultas' ? (
          <Ionicons name='alarm' size={24} color='white' />
        ) : (
          <Ionicons name='add-circle' size={24} color='white' />
        )}
      </View>
      <View style={styles.bodyContainer}>
        {title == 'Alarme' ? (
          <Text style={styles.bodyText}>08:00</Text>
        ) : (
          <Text></Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(222, 186, 225, 0.48)',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    margin: 5,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: fonts.leading,
    color: 'white',
  },
  bodyContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    fontSize: 30,
    fontFamily: fonts.bold,
    color: 'white',
  },
});
