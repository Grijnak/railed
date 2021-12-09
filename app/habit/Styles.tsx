import { StyleSheet } from 'react-native';
import Color from '../Color';

const StackStyle = {
  headerStyle: {
    backgroundColor: Color.mainBg,
  },
  headerTintColor: Color.text,
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.mainBg,
    alignItems: 'center',
  },
  listElement: {
    backgroundColor: Color.lightBg,
    height: 40,
    width: '90%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 20,
  },
  textInput: {
    marginVertical: 5,
    padding: 5,
    backgroundColor: Color.lightBg,
    color: Color.textLight,
    borderRadius: 5,
  },
  maxRow: {
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
  },
});

export { StackStyle, Styles };
