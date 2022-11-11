import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BackgroundImage from '../../assets/background.png';
import Wave from '../../assets/onda.png';
import Wave2 from '../../assets/onda2.png';
import Pagination from '../../components/Pagination';
import { LoginScreenProp } from '../../routes/types';

import { styles } from './styles';

const { width } = Dimensions.get('window');

const FirstScreen = () => {
  return (
    <ImageBackground style={styles.content} source={BackgroundImage}>
      <ImageBackground style={styles.wave} resizeMode="stretch" source={Wave}>
        <Text style={styles.waveText}>BEM VINDO AO</Text>
        <Text style={styles.waveText}>APP TECH FUN</Text>
      </ImageBackground>
    </ImageBackground>
  );
};

const SecondScreen = () => {
  const { navigate } = useNavigation<LoginScreenProp>();

  const navigateToLogin = () => {
    return navigate('Login');
  };

  return (
    <ImageBackground style={styles.content} source={BackgroundImage}>
      <ImageBackground
        style={[styles.wave, { height: 224 }]}
        resizeMode="stretch"
        source={Wave2}
      >
        <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
          <Text style={styles.buttonText}>iniciar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  );
};

const Onboarding = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSnap = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    if (index !== activeSlide) {
      setActiveSlide(index);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        disableIntervalMomentum
        snapToInterval={width}
        onScroll={handleSnap}
        ref={scrollViewRef}
        keyboardShouldPersistTaps="handled"
      >
        <FirstScreen />
        <SecondScreen />
      </ScrollView>
      <Pagination entries={[0, 1]} active={activeSlide} />
    </View>
  );
};

export default Onboarding;
