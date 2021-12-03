import { StyleSheet } from 'react-native';
import Color from '../Color';

const StackStyle = {
  headerStyle: {
    backgroundColor: Color.mainBg,
  },
  headerTintColor: Color.text,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.mainBg,
    alignItems: 'center',
  },
  listElement: {
    backgroundColor: Color.lightBg,
    height: 40,
    width: '100%',
    padding: 5,
    alignItems: 'center',
    margin: 2,
    borderRadius: 20,
  },
});

export { StackStyle, styles };
