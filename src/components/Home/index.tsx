import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';

import Header from '../common/Header';

import commonStyles from '../../assets/styles';
import {Link, useNavigation} from '@react-navigation/native';
import Card from '../common/Card';
import Explore from '../common/Explore';
import {BOOKS_SCREEN, VIEW_BOOK_SCREEN} from 'src/constants/screens';
import useGetRequest from 'src/queryHooks/interfaces/useRequest';
import {GET_BOOK} from 'src/queryHooks/constants/keys';
const Home = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any, any>>();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl:
        'https://images.routledge.com/common/jackets/originals/978036753/9780367537937.tif',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
      title: 'First Item',
      imageUrl:
        'https://assets.hongkiat.com/uploads/children-book-covers/breadcrumbs.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b2',
      title: 'First Item',
      imageUrl:
        'https://s3-ap-southeast-2.amazonaws.com/assets.allenandunwin.com/images/original/9781785785160.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
      title: 'First Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcPsdbZZbFyMp_Lc-Y9hqT4uSweFdHNO84w&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Third Item',
      imageUrl:
        'https://images.routledge.com/common/jackets/originals/978036776/9780367768157.tif',
    },
  ];
  const DATASIM = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b5',
      title: 'First Item',
      imageUrl: 'https://m.media-amazon.com/images/I/41RFpjsbwDL._SL500_.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b6',
      title: 'First Item',
      imageUrl:
        'https://kbimages1-a.akamaihd.net/51a19474-a86d-4bb7-8b4b-6979625a207c/353/569/90/False/patience-is-virtue-learn-to-develop-patience.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
      title: 'First Item',
      imageUrl:
        'https://images-platform.99static.com//QYWt9hflpp9Iklq4WEqWG-8mKOU=/0x0:1650x1650/fit-in/590x590/99designs-contests-attachments/75/75544/attachment_75544031',
    },
  ];
  const {data, error, isLoading} = useGetRequest('/books', GET_BOOK);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(VIEW_BOOK_SCREEN)}
        style={[commonStyles.lgPaddingLeft]}>
        <Card
          content={
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={{
                width: 120,
                height: 150,
                borderRadius: 10,
              }}
            />
          }
        />
      </TouchableOpacity>
    );
  };
  const renderExploreItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[commonStyles.lgPaddingLeft, commonStyles.lgPaddingTop]}>
        <Explore imageUrl={item.imageUrl} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.container]}>
      <View style={[commonStyles.mdPadding]}>
        <Header />
        <View
          style={[
            commonStyles.lgPaddingTop,
            commonStyles.flexRow,
            commonStyles.alignItemsCenter,
            commonStyles.justifyContentSpaceBetween,
          ]}>
          <Text style={[commonStyles.bold, commonStyles.mdText]}>Library</Text>
          <Link to={{screen: BOOKS_SCREEN}}>
            <Text style={[commonStyles.textColorLight]}>See all</Text>
          </Link>
        </View>
      </View>
      <View style={[commonStyles.lgPaddingTop]}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={[commonStyles.xlgPaddingTop]}>
        <View style={[commonStyles.mdPaddingLeft]}>
          <Text style={[commonStyles.mdText, commonStyles.bold]}>Explore</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATASIM}
          renderItem={renderExploreItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
