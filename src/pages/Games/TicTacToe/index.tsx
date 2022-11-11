import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';

import GameHeader from '../../../components/GameHeader';

import { styles } from './styles';

const TicTacToe = () => {
  const { goBack } = useNavigation();

  const like = () => null;
  const share = () => null;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <GameHeader like={like} share={share} goBack={goBack} />
    </View>
  );
};

export default TicTacToe;
