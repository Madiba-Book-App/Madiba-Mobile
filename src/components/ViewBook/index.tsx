import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from 'src/assets/styles';
import {BOOKS_SCREEN} from 'src/constants/screens';
import Button from '../common/Button';
import Card from '../common/Card';

interface Props {}

const ViewBook = (props: Props) => {
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<any, any>>();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romantic-love-story-book-cover-design-template-a1188e523cb9f6495f3c022a1d9d2928_screen.jpg?ts=1637008707',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl:
        'https://s2982.pcdn.co/wp-content/uploads/2019/02/breathless_by_beverly_jenkins_cover.jpg.optimal.jpg',
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
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F04%2Fwilde-in-love-2000.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Third Item',
      imageUrl:
        'https://kbimages1-a.akamaihd.net/fc571a26-f5b1-44dd-b790-f4804f8706fc/1200/1200/False/my-angel-guardian-lesbian-romance.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Third Item',
      imageUrl:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romantic-love-story-book-cover-design-template-a1188e523cb9f6495f3c022a1d9d2928_screen.jpg?ts=1637008707',
    },
  ];
  const renderItem = ({item}: any) => {
    return (
      <View style={[commonStyles.lgPaddingLeft, commonStyles.mdPaddingTop]}>
        <Card
          width={90}
          height={110}
          content={
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={{
                width: 90,
                height: 110,
                borderRadius: 10,
              }}
            />
          }
        />
      </View>
    );
  };
  return (
    <View>
      <View style={[commonStyles.mdPadding]}>
        <SafeAreaView>
          <Icon name="arrow-back" size={30} onPress={() => goBack()} />
        </SafeAreaView>
        <View style={[commonStyles.flexRow, commonStyles.alignItemsCenter]}>
          <Card
            content={
              <Image
                source={{
                  uri: 'https://bookcoverinsanity.files.wordpress.com/2021/06/castle-romance-3-copy.jpg?w=800',
                }}
                style={{
                  width: 120,
                  height: 150,
                  borderRadius: 10,
                }}
              />
            }
          />
          <View style={[commonStyles.mdPaddingLeft, commonStyles.mdMarginTop]}>
            <Text style={[commonStyles.bold, commonStyles.smText]}>
              A Dream of her down
            </Text>
            <Text style={[commonStyles.smPaddingTop]}>by Nirat Bhatnager</Text>
            <Text style={[commonStyles.mdPaddingTop]}>6 books lef</Text>
            <View style={[commonStyles.mdPaddingTop]}>
              <Button title="Borrow book" />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={commonStyles.mdPadding}>
          <Text style={[commonStyles.bold, commonStyles.smText]}>Synopsis</Text>
          <Text
            style={[commonStyles.mdPaddingTop, commonStyles.mdPaddingBottom]}>
            During the 1980s ad 90s, the Resource institute, heaaded by During
            the 1980s ad 90s, the Resource institute, heaaded During the 1980s
            ad 90s, the Resource institute, heaaded by
          </Text>
          <View
            style={[
              commonStyles.flexRow,
              commonStyles.justifyContentSpaceBetween,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.smText]}>
              Similar books
            </Text>
            <TouchableOpacity onPress={() => navigate(BOOKS_SCREEN)}>
              <Text>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default ViewBook;
