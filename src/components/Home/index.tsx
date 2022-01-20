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
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl:
        'https://bookcoverinsanity.files.wordpress.com/2021/06/castle-romance-3-copy.jpg?w=800',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl:
        'https://s3-ap-southeast-2.amazonaws.com/assets.allenandunwin.com/images/original/9781785785160.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcPsdbZZbFyMp_Lc-Y9hqT4uSweFdHNO84w&usqp=CAU',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b729f675305113.5c48c4442e789.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVcXdjPPqJlA6Ou5vHgWB07qRfcmqO9g4Uw&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaL_iRtR1ERL0gxCYmi79mEzgZG1vqP5eHPfnlX99Opa37uHO-s0Mxbx0NY4-xAJ3rIMs&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Third Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2Svlw0IVnzfi2kd3T7_H-K9J0gpx6uynaQ&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Third Item',
      imageUrl:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romantic-love-story-book-cover-design-template-a1188e523cb9f6495f3c022a1d9d2928_screen.jpg?ts=1637008707',
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
