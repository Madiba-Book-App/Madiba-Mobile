import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import commonStyles from 'src/assets/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from 'src/utils/colors';
interface Props {}

const Header = (props: Props) => {
  return (
    <View>
      <SafeAreaView>
        <View
          style={[
            commonStyles.flexRow,
            commonStyles.justifyContentSpaceBetween,
            commonStyles.alignItemsCenter,
          ]}>
          <View>
            <Icon name="menu" size={30} />
          </View>
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
            <View
              style={[
                {borderRadius: 100},
                commonStyles.bgColorPrimaryDark,
                commonStyles.smPadding,
              ]}>
              <Icon name="person" size={20} color={colors.white} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
