import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#6BF7F7',
    height: 70,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#000',
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  input: {
    marginLeft: 10,
  },
  horizontalList: {
    paddingRight: 20,
    maxHeight: 100,
  },
  cardHeader: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cardHeaderTitle: {
    fontSize: 16,
    marginLeft: 8,
  },
  cardContent: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingRight: 10,
    marginLeft: 20,
  },
  cardContentTitle: {},

  category: {
    alignItems: 'center',
    marginTop: 10,
    width: 100,
    marginLeft: 20,
  },
  categoryImage: {
    height: 100,
    width: 100,
  },
  cardCategoryImage: {},
  cardCategoryText: {},
});
