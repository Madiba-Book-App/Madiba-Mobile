import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import commonStyles from 'src/assets/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from 'src/utils/colors';
import {useNavigation} from '@react-navigation/native';
import {BOOKS_SCREEN, LOGIN_SCREEN} from 'src/constants/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import storage from 'src/utils/mmkvStorage';
interface Props {}

const Header = (props: Props) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any, any>>();
  const imageURL =
    'https://bestprofilepix.com/wp-content/uploads/2014/07/cute-girls-profile-pictures-for-facebook-with-apple-I-phone.jpg';

  const logOut = () => {
    storage.delete('token');
    navigate(LOGIN_SCREEN);
  };
  return (
    <View>
      <SafeAreaView>
        <View
          style={[
            commonStyles.flexRow,
            commonStyles.justifyContentSpaceBetween,
            commonStyles.alignItemsCenter,
          ]}>
          {imageURL &&
            ((
              <Image
                source={{
                  uri: imageURL,
                }}
                style={{height: 70, width: 70, borderRadius: 100}}
              />
            ) || (
              <View
                style={[
                  {borderRadius: 100},
                  commonStyles.bgColorPrimaryDark,
                  commonStyles.smPadding,
                ]}>
                <Icon name="person" size={40} color={colors.white} />
              </View>
            ))}

          <View
            style={[
              commonStyles.flexRow,
              commonStyles.alignItemsCenter,
              {width: '25%'},
              commonStyles.justifyContentSpaceBetween,
            ]}>
            <View>
              <Icon
                name="search"
                size={30}
                onPress={() => navigate(BOOKS_SCREEN)}
              />
            </View>
            <View>
              <Icon name="settings" size={30} onPress={logOut} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;
