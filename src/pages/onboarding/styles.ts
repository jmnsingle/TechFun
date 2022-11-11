import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    position: 'relative',
  },
  content: {
    flex: 1,
    width,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wave: {
    width,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 140,
    borderColor: '#000',
    borderWidth: 1,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
