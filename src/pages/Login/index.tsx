import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, TextInput, View } from 'react-native';

import Button from '../../components/Button';
import { LoginScreenProp } from '../../routes/types';

import { styles } from './styles';

const Login = () => {
  const { navigate } = useNavigation<LoginScreenProp>();

  const navigateToRegister = () => {
    return navigate('Register');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Olá</Text>
        <Text style={styles.description}>
          Antes de deixar que seu filho explore o mundo divertido do TecFun,
          separe alguns minutos para decidir quais controles importantes de
          segurança da família você quer usar.
        </Text>
      </View>
      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome da criança"
            placeholderTextColor="#231851"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Idade"
            placeholderTextColor="#231851"
            keyboardType="number-pad"
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Ao prosseguir você concorda com os
        </Text>
        <Text style={styles.footerTextBorderBotoom}>
          termos de uso e política da empresa.
        </Text>
        <Button title="CADASTRAR" onPress={navigateToRegister} />
      </View>
    </View>
  );
};

export default Login;
