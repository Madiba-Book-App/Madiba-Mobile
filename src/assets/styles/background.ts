import {StyleSheet} from 'react-native';

import colors from 'src/utils/colors';
import capitalize from 'src/utils/capitalize';

export interface BackgroundColors {
  bgColorPrimary: {backgroundColor: string};
  bgColorLightPrimary: {backgroundColor: string};
  bgColorTransparent: {backgroundColor: string};
  bgColorWhite: {backgroundColor: string};
  bgColorLightSecondary: {backgroundColor: string};
  bgColorDanger: {backgroundColor: string};
  bgColorPrimaryBlue: {backgroundColor: string};
  bgColorPrimaryOrange: {backgroundColor: string};
  bgColorPrimaryGreen: {backgroundColor: string};
  bgColorPrimaryDark: {backgroundColor: string};
  bgColorSecondary: {backgroundColor: string};
  bgColorLightGrey: {backgroundColor: string};
  bgColorCardGray: {backgroundColor: string};
}

const bgColors = Object.keys(colors).map((key: string) => ({
  [`bgColor${capitalize(key)}`]: {backgroundColor: colors[key]},
}));

let styles = {} as BackgroundColors;

bgColors.forEach(style => {
  styles = {...styles, ...style};
});

export default StyleSheet.create(styles);
