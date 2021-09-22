import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import fonts from '../constants/fonts';

interface ButtonProps extends TouchableOpacityProps {
  nome: string;
}

export default function ButtonHome({ nome, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.string}>{nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02005F',
    width: '100%',
    height: 54,
    borderRadius: 18,
    borderColor: '#040279',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
  },
  string: {
    color: 'white',
    fontFamily: fonts.button,
  },
});
