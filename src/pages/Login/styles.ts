import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#000',
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
  },
  inputs: {},
  inputContainer: {
    borderBottomColor: '#231851',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  input: {
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: '#504F51',
  },
  footerTextBorderBotoom: {
    color: '#504F51',
    borderBottomColor: '#504F51',
    borderBottomWidth: 1,
  },
});
