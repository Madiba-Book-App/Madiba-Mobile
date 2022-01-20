import React from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import commonStyles from 'src/assets/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from 'src/utils/colors';
interface Props {}

const Header = (props: Props) => {
  const imageURL =
    'https://bestprofilepix.com/wp-content/uploads/2014/07/cute-girls-profile-pictures-for-facebook-with-apple-I-phone.jpg';
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
              {width: '30%'},
              commonStyles.justifyContentSpaceBetween,
            ]}>
            <View>
              <Icon name="search" size={30} />
            </View>
            <View>
              <Icon name="notifications" size={30} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
