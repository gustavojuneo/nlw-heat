import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ColorValue,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { COLORS } from '../../theme';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  color?: ColorValue;
  backgroundColor?: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
};

export function Button({
  title,
  color = COLORS.WHITE,
  backgroundColor = COLORS.PINK,
  icon,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          {icon && <AntDesign name={icon} size={24} style={styles.icon} />}
          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
