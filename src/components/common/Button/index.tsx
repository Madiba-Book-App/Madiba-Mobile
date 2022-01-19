import React from 'react';
import {ActivityIndicator, Text, View, TouchableOpacity} from 'react-native';
import {s} from 'react-native-size-matters';
import commonStyles from 'src/assets/styles';
import colors from 'src/utils/colors';
import styles from './styles';

type ButtonProps = {
  testID?: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  title: string;
  icon?: Element;
  full?: boolean;
  outline?: boolean;
  plain?: boolean;
  color?: string;
  style?: Record<string, any>;
};

const Button: React.FC<ButtonProps> = ({
  testID,
  onPress,
  disabled,
  title,
  loading,
  icon,
  full,
  outline,
  plain,
  color,
  style,
}) => {
  const bgStyles = () => {
    if (disabled) {
      return commonStyles.bgColorLightPrimary;
    }
    if (outline || plain) {
      return commonStyles.bgColorTransparent;
    }
    return commonStyles.bgColorSecondary;
  };

  const borderStyles = [
    commonStyles.borderWidth1,
    !plain
      ? commonStyles.borderColorSecondary
      : commonStyles.borderColorTransparent,
  ];

  const pdStyles = commonStyles.mdPadding;
  const wStyles = {width: full ? '100%' : s(152)};
  const colorStyles = {
    color: outline || plain ? colors.primaryDark : colors.white,
  };

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        commonStyles.flexRow,
        commonStyles.justifyContentCenter,
        commonStyles.alignItemsCenter,
        commonStyles.smMarginBottom,
        commonStyles.borderRadius6,
        pdStyles,
        wStyles,
        bgStyles(),
        ...borderStyles,
        style,
      ]}>
      {!loading && icon && <View style={styles.iconStyle}>{icon}</View>}
      {!loading && (
        <Text
          style={[
            styles.textStyle,
            colorStyles,
            color ? {color} : {},
            {fontSize: s(14)},
          ]}>
          {title}
        </Text>
      )}
      {loading && (
        <ActivityIndicator
          style={[commonStyles.fullWidth]}
          size="small"
          color={colors.white}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
