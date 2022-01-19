import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import commonStyles from 'src/assets/styles';

interface Props {
  title: string;
  text: string;
}

const index = ({title, text}: Props) => {
  return (
    <View style={[commonStyles.justifyContentSpaceBetween]}>
      <View style={[commonStyles.alignItemsCenter]}>
        <Text style={[commonStyles.bold, commonStyles.mdText]}>{title}</Text>
        <Text style={[commonStyles.lgPadding]}>{text}</Text>
      </View>
    </View>
  );
};

export default index;
