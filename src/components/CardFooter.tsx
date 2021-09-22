import React, { Children } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import fonts from '../constants/fonts';
import { Ionicons } from '@expo/vector-icons';

type CardProps = TouchableOpacityProps & {
  title: string;
};

export default function CardFooter({ title, ...rest }: CardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      {title === 'Atividade física' ? (
        <Ionicons name='barbell' size={24} color='white' />
      ) : title === 'Refeições' ? (
        <Ionicons name='restaurant' size={24} color='white' />
      ) : (
        <Ionicons name='add-circle' size={24} color='white' />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(222, 186, 225, 0.48)',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
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
