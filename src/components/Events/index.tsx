import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from 'src/assets/styles';
import Card from '../common/Card';
interface Props {}

const Events = (props: Props) => {
  const {goBack} = useNavigation();
  const DATASIM = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl: 'https://m.media-amazon.com/images/I/41RFpjsbwDL._SL500_.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl:
        'https://kbimages1-a.akamaihd.net/51a19474-a86d-4bb7-8b4b-6979625a207c/353/569/90/False/patience-is-virtue-learn-to-develop-patience.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl:
        'https://images-platform.99static.com//QYWt9hflpp9Iklq4WEqWG-8mKOU=/0x0:1650x1650/fit-in/590x590/99designs-contests-attachments/75/75544/attachment_75544031',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={[commonStyles.flexRow, commonStyles.mdPaddingTop]}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={{
            width: 100,
            height: 110,
            borderRadius: 2,
          }}
        />
        <View style={[commonStyles.smPaddingLeft]}>
          <View style={[commonStyles.flexRow]}>
            <Text
              numberOfLines={2}
              style={[
                commonStyles.bold,
                commonStyles.mdPaddingRight,
                commonStyles.smText,
                {width: '65%'},
              ]}>
              Lorem ipsum, dolor sit amet consectetur
            </Text>
            <View style={[commonStyles.textAlignRight]}>
              <Icon name="bookmark" size={20} />
            </View>
          </View>
          <View>
            <Text
              style={[commonStyles.smPaddingTop, commonStyles.mdPaddingRight]}
              numberOfLines={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              voluptatibus quasi, doloremque magnam blanditiis sunt nostrum
            </Text>
            <View>
              <Text>2m ago</Text>
              <Text></Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={[commonStyles.mdPadding]}>
      <SafeAreaView>
        <Icon name="arrow-back" size={30} onPress={() => goBack()} />
      </SafeAreaView>
      <Text style={[commonStyles.bold, commonStyles.smText]}>Latest</Text>
      <View style={[commonStyles.lgPaddingTop]}>
        <View>
          <Text
            style={[
              commonStyles.bold,
              commonStyles.mdText,
              commonStyles.smPaddingBottom,
            ]}>
            Rwanda library opened new office at get book agents
          </Text>
          <View>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqOqojLsxlpRWbNgW1EmxwIsrBKNDIlmcsA&usqp=CAU',
              }}
              style={{
                width: 350,
                height: 150,
                borderRadius: 10,
              }}
            />
          </View>
          <Text style={[commonStyles.smPaddingTop]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nulla
            voluptas eaque rem assumenda reiciendis neque nobis. Rerum, labore
            sapiente maxime cum accusamus explicabo, impedit similique dolores
            neque nulla quod?
          </Text>
          <View
            style={[
              commonStyles.flexRow,
              commonStyles.justifyContentSpaceBetween,
              commonStyles.smPaddingTop,
            ]}>
            <Text>2m ago</Text>
            <Icon name="bookmark" size={20} />
          </View>
        </View>
        <FlatList
          data={DATASIM}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Events;
