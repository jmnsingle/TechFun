import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: '#ddd',
    height: 10,
    width: 10,
    borderRadius: 5,
    zIndex: 99,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#999',
    height: 14,
    width: 14,
    borderRadius: 7,
  },
});
