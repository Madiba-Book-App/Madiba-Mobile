import {Link} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import commonStyles from 'src/assets/styles';
import {VIEW_BOOK_SCREEN} from 'src/constants/screens';
import Card from '../Card';

interface Props {
  imageUrl: string;
}

const BookCard = ({imageUrl}: Props) => {
  return (
    <View
      style={[
        commonStyles.borderRadius10,
        commonStyles.shadow4,
        commonStyles.bgColorLightGrey,
        commonStyles.xlgMarginTop,
        {
          height: 100,
        },
      ]}>
      <View style={[{bottom: 30, left: 20}, commonStyles.flexRow]}>
        <Card
          width={90}
          height={110}
          content={
            <Image
              source={{
                uri: imageUrl,
              }}
              style={{
                width: 90,
                height: 110,
                borderRadius: 10,
              }}
            />
          }
        />
        <View style={[commonStyles.justifyContentEnd, commonStyles.mdPadding]}>
          <Text style={[commonStyles.bold]}>Think about water</Text>
          <Text style={[commonStyles.smPaddingBottom]}>By nirat bhatnager</Text>
          <View
            style={[
              commonStyles.flexRow,
              commonStyles.justifyContentSpaceBetween,
              {width: '65%'},
            ]}>
            <Text>3 days left</Text>
            <Link to={{screen: VIEW_BOOK_SCREEN}}>
              <Text style={[commonStyles.textColorSecondary]}>Borrow</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookCard;
