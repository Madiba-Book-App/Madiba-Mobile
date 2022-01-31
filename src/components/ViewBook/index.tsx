import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from 'src/assets/styles';
import {BOOKS_SCREEN} from 'src/constants/screens';
import BottomSheet from '../common/BottomSheet';
import Button from '../common/Button';
import Card from '../common/Card';
import CheckBox from '@react-native-community/checkbox';
import colors from 'src/utils/colors';

interface Props {}

const ViewBook = (props: Props) => {
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<any, any>>();
  const ref = useRef();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51rtZ928r0L.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f66',
      title: 'Second Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOs2y4H9o0z9hMBNxlt_pYrQ1hYSYx7LfxyTlLb-_T6NpuzBLW_YWTqzAJoc3UVTWKV0&usqp=CAU',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-zCfcc7gOQ18WS3A7BLzxluiFbXD2xg1yw&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AFQjZfHfItcIjX54pC5TKVq4BMf1aDLmWSl0U8NAGTSQhQ7TZ-Nqk1frEB20jI8Mx68&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgz1rjLWQsjSNIBuJ68FDFHGyS7W5oKsYusw&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Third Item',
      imageUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/561b1483830519.5d48f1ff93014.jpg',
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
      <BottomSheet ref={ref} height={250}>
        <View style={[commonStyles.mdPadding]}>
          <Text style={[commonStyles.smText, commonStyles.bold]}>
            Select payment type
          </Text>
          <View>
            <View style={[commonStyles.flexRow, commonStyles.alignItemsCenter]}>
              <CheckBox
                onTintColor={colors.secondary}
                onCheckColor={colors.secondary}
              />
              <View style={[commonStyles.mdPaddingLeft]}>
                <Image
                  source={{
                    uri: 'https://www.seekpng.com/png/full/69-691715_mtn-mm-logo-generic-mtn-mobile-money-logo.png',
                  }}
                  style={{height: 50, width: 70}}
                />
              </View>
            </View>
            <View
              style={[
                commonStyles.flexRow,
                commonStyles.alignItemsCenter,
                commonStyles.mdPaddingTop,
              ]}>
              <CheckBox
                onTintColor={colors.secondary}
                onCheckColor={colors.secondary}
              />
              <View style={[commonStyles.mdPaddingLeft]}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png',
                  }}
                  style={{height: 50, width: 82}}
                />
              </View>
            </View>
          </View>
          <View style={[commonStyles.lgPaddingTop]}>
            <Button full title="Proceed" />
          </View>
        </View>
      </BottomSheet>
      <View style={[commonStyles.mdPadding]}>
        <SafeAreaView>
          <Icon name="arrow-back" size={30} onPress={() => goBack()} />
        </SafeAreaView>
        <View style={[commonStyles.flexRow, commonStyles.alignItemsCenter]}>
          <Card
            content={
              <Image
                source={{
                  uri: 'https://assets.hongkiat.com/uploads/children-book-covers/breadcrumbs.jpg',
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
              <Button title="Borrow book" onPress={() => ref.current.open()} />
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
