import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from 'src/assets/styles';
import BookCard from '../common/BookCard';

interface Props {}

const Books = (props: Props) => {
  const {goBack} = useNavigation<NativeStackNavigationProp<any, any>>();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl: 'https://m.media-amazon.com/images/I/51RXND+8SUL.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
      title: 'Second Item',
      imageUrl:
        'https://images.routledge.com/common/jackets/crclarge/978149877/9781498776264.jpg',
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
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romantic-love-story-book-cover-design-template-a1188e523cb9f6495f3c022a1d9d2928_screen.jpg?ts=1637008707',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Third Item',
      imageUrl: 'https://m.media-amazon.com/images/I/418EgDPfv4L.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Third Item',
      imageUrl:
        'https://images.routledge.com/common/jackets/originals/978036776/9780367768157.tif',
    },
  ];
  const renderItem = ({item}: any) => {
    return <BookCard imageUrl={item.imageUrl} />;
  };
  return (
    <View
      style={[
        commonStyles.mdPadding,
        commonStyles.flex1,
        commonStyles.lgMarginBottom,
      ]}>
      <SafeAreaView>
        <Icon name="arrow-back" size={30} onPress={() => goBack()} />
      </SafeAreaView>
      <View style={[commonStyles.xlgMarginBottom]}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text style={[commonStyles.bold, commonStyles.smText]}>
                Available Books
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Books;
