import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  TicTacToe: undefined;
};

export type LoginScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type OnboardingScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

export type RegisterScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

export type HomeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
