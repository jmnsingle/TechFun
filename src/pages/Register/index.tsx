import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Walle from '../../assets/walle.png';
import Button from '../../components/Button';
import { RegisterScreenProp } from '../../routes/types';

import { styles } from './styles';

const { height } = Dimensions.get('window');

const Register = () => {
  const { navigate } = useNavigation<RegisterScreenProp>();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigateToHome = () => {
    return navigate('Home');
  };
  const handleShowPassword = () => {
    setShowPassword(state => !state);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: 'space-between' }}
    >
      <StatusBar backgroundColor="#c7fcfc" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ height }}
      >
        <View style={styles.header}>
          <View style={styles.headerInfo}>
            <Icon name="arrow-back-ios" size={30} color="#231851" />
            <Icon name="help-outline" size={30} color="#231851" />
          </View>
          <Text style={styles.title}>SEJA BEM VINDO</Text>
          <Image style={styles.headerImage} source={Walle} />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Icon name="email" size={30} color="#231851" />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#231851"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={30} color="#231851" />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#231851"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={handleShowPassword}>
              <Icon name="remove-red-eye" size={30} color="#231851" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>Esqueceu a senha?</Text>
            <Text style={styles.footerTextBorderBotoom}>Clique aqui</Text>
          </View>
          <Button title="CADASTRAR" onPress={navigateToHome} />
          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>Ou conecte com</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.facebook} onPress={navigateToHome}>
              <Icon name="facebook" size={24} color="#fff" />
              <Text style={styles.buttonText}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.apple} onPress={navigateToHome}>
              <Icon name="facebook" size={24} color="#fff" />
              <Text style={styles.buttonText}>APPLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;
