import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HomeScreenProp, RootStackParamList } from '../../routes/types';
import Calculator from '../../assets/calculator.png';
import Portuguese from '../../assets/portuguese.png';
import TI from '../../assets/ti.png';

import { styles } from './styles';

const Home = () => {
  const { navigate } = useNavigation<HomeScreenProp>();

  const navigateToGame = (screenName: keyof RootStackParamList) => {
    return navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6BF7F7" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>TECH FUN</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="search" size={24} color="#504F51" />
        <TextInput
          style={styles.input}
          placeholder="Eventos, organizadores e locais"
          placeholderTextColor="#504F51"
        />
      </View>
      <View style={styles.cardHeader}>
        <Icon name="favorite-border" size={24} color="#504F51" />
        <Text style={styles.cardHeaderTitle}>Favoritos</Text>
      </View>
      <ScrollView horizontal style={styles.horizontalList}>
        <TouchableOpacity
          style={styles.cardContent}
          onPress={() => navigateToGame('TicTacToe')}
        >
          <Text style={styles.cardContentTitle}>Jogo da</Text>
          <Text style={styles.cardContentTitle}>velha</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardHeader}>
        <Icon name="category" size={24} color="#504F51" />
        <Text style={styles.cardHeaderTitle}>Categorias</Text>
      </View>
      <ScrollView horizontal style={styles.horizontalList}>
        <View style={styles.category}>
          <Image source={Calculator} style={styles.categoryImage} />
          <Text style={styles.cardContentTitle}>Matemática</Text>
        </View>
        <View style={styles.category}>
          <Image source={Portuguese} style={styles.categoryImage} />
          <Text style={styles.cardContentTitle}>Português</Text>
        </View>
        <View style={styles.category}>
          <Image source={TI} style={styles.categoryImage} />
          <Text style={styles.cardContentTitle}>Tecnologia</Text>
        </View>
      </ScrollView>

      <View style={styles.cardHeader}>
        <Icon name="videogame-asset" size={24} color="#504F51" />
        <Text style={styles.cardHeaderTitle}>Jogos</Text>
      </View>
      <ScrollView />
    </View>
  );
};

export default Home;
