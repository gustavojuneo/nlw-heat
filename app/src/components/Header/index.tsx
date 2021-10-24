import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { UserAvatar } from '../UserAvatar';

import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../contexts/hooks/useAuth';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.userProfile}>
        {!!user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}
        <UserAvatar imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
