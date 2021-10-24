import React from 'react';

import { View } from 'react-native';
import { useAuth } from '../../contexts/hooks/useAuth';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="Entrar com Github"
        icon="github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        isLoading={isSigningIn}
        onPress={signIn}
      />
    </View>
  );
}
