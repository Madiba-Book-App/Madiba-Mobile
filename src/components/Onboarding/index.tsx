import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import commonStyles from 'src/assets/styles';
import Swiper from 'react-native-swiper';

import {OnboardingPage} from 'src/components/common';
import {REGISTER_SCREEN} from 'src/constants/screens';
interface Props {}
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const Onboarding = (props: Props) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any, any>>();
  return (
    <Swiper style={styles.wrapper}>
      <View
        style={[
          commonStyles.flex1,
          commonStyles.alignItemsCenter,
          commonStyles.justifyContentSpaceEvenly,
        ]}>
        <OnboardingPage
          title="Do you need good book to read"
          text="Madiba book store is here for you explore our book store for all kind
        off book"
        />
        <View
          style={[
            commonStyles.flex,
            commonStyles.flexColumn,
            commonStyles.justifyContentEnd,
          ]}>
          <TouchableOpacity onPress={() => navigate(REGISTER_SCREEN)}>
            <Text style={[commonStyles.textColorInfo]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          commonStyles.flex1,
          commonStyles.alignItemsCenter,
          commonStyles.justifyContentSpaceEvenly,
        ]}>
        <OnboardingPage
          title="We have all kind of books"
          text="We have different  categoty  of books for kids, adult and youth"
        />
        <View
          style={[
            commonStyles.flex,
            commonStyles.flexColumn,
            commonStyles.justifyContentEnd,
          ]}>
          <TouchableOpacity onPress={() => navigate(REGISTER_SCREEN)}>
            <Text style={[commonStyles.textColorInfo]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          commonStyles.flex1,
          commonStyles.alignItemsCenter,
          commonStyles.justifyContentSpaceEvenly,
        ]}>
        <OnboardingPage
          title="We have all kind of books"
          text="We have different  categoty  of books for kids, adult and youth"
        />
        <View style={[commonStyles.flex, commonStyles.flexColumn]}>
          <TouchableOpacity
            style={[
              commonStyles.bgColorPrimaryBlue,
              commonStyles.mdPadding,
              commonStyles.borderRadius4,
            ]}
            onPress={() => navigate(REGISTER_SCREEN)}>
            <Text style={[commonStyles.textColorWhite, commonStyles.bold]}>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

export default Onboarding;
