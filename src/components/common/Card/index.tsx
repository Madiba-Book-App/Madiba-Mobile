import React, {ReactNode} from 'react';
import {View} from 'react-native';
import commonStyles from 'src/assets/styles';
interface Props {
  width?: number;
  height?: number;
  content?: ReactNode;
}

const Card = ({width, height, content}: Props) => {
  return (
    <View
      style={[
        commonStyles.borderRadius10,
        commonStyles.bgColorLightGrey,
        {
          height: (height && height) || 150,
          width: (width && width) || 120,
        },
        commonStyles.shadow3,
      ]}>
      {content}
    </View>
  );
};

export default Card;
