import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#000',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 26,
    color: '#504F51',
    opacity: 0.6,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#c7fcfc',
    paddingHorizontal: 20,
    height: 260,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  headerInfo: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  headerImage: {
    height: 150,
    width: 150,
  },
  inputs: {
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    borderBottomColor: '#231851',
    borderBottomWidth: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  footer: {
    marginHorizontal: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  footerInfo: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  footerText: {
    textAlign: 'center',
    color: '#504F51',
  },
  footerTextBorderBotoom: {
    color: '#504F51',
    borderBottomColor: '#504F51',
    borderBottomWidth: 1,
    marginLeft: 4,
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4867AA',
    width: '40%',
    borderRadius: 8,
    paddingVertical: 2,
  },
  apple: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    width: '40%',
    borderRadius: 8,
    paddingVertical: 2,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 4,
  },
});
