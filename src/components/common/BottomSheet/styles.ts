import { StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';
import colors from 'src/utils/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
  },
  draggableIcon: {
    backgroundColor: colors.primaryGrey,
    width: s(61),
    height: 2,
    borderRadius: s(15),
  },
  container: {
    borderRadius: s(20),
    minHeight: 200,
  },
});
