import React from 'react';
import { Text, View } from 'react-native';
import { MotiView } from 'moti';

import { UserAvatar } from '../UserAvatar';

import { styles } from './styles';
import { User } from '../../contexts/auth';

export type Message = {
  id: string;
  text: string;
  user: User;
};

type MessageProps = {
  data: Message;
};

export function Message({ data }: MessageProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.message}>{data.text}</Text>

      <View style={styles.footer}>
        <UserAvatar imageUri={data.user.avatar_url} size="SMALL" />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}
