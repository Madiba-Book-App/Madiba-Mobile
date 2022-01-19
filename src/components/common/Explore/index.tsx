import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyles from 'src/assets/styles';
import Card from '../Card';

interface Props {}

const Explore = (props: Props) => {
  return (
    <View style={[commonStyles.flexRow, commonStyles.alignItemsCenter]}>
      <Card width={80} height={100} />
      <View style={[commonStyles.mdPaddingLeft]}>
        <Text style={[commonStyles.bold, commonStyles.smText]}>
          Mothers: Stories
        </Text>
        <Text>By Chris Power</Text>
      </View>
    </View>
  );
};

export default Explore;
