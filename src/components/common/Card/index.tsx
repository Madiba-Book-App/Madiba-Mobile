import React from 'react';
import {Text, View} from 'react-native';
import commonStyles from 'src/assets/styles';

interface Props {
  width?: number;
  height?: number;
}

const Card = ({width, height}: Props) => {
  return (
    <View
      style={[
        commonStyles.borderRadius10,
        commonStyles.bgColorPrimaryDark,
        {
          height: (height && height) || 150,
          width: (width && width) || 120,
        },
        commonStyles.shadow3,
      ]}>
      <Text>Here</Text>
    </View>
  );
};

export default Card;
