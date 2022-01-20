import React from 'react';
import {Link, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';

import commonStyles from 'src/assets/styles';
import Button from '../common/Button';
import Input from '../common/Input';
import {HOME_SCREEN, REGISTER_SCREEN} from 'src/constants/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {}

const Register = (props: Props) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any, any>>();

  return (
    <View style={[commonStyles.flex1, commonStyles.bgColorPrimary]}>
      <View style={{height: '40%'}} />
      <View
        style={[
          commonStyles.bgColorWhite,
          commonStyles.mdPadding,
          commonStyles.flex1,
          commonStyles.borderRadius15,
        ]}>
        <Text
          style={[
            commonStyles.bold,
            commonStyles.mdText,
            commonStyles.mdPaddingBottom,
          ]}>
          Get started
        </Text>
        <View>
          <Input placeholder="Enter your email" label="Email" />
          <Input
            secureTextEntry
            placeholder="Enter password"
            label="Password"
          />
        </View>
        <View style={[commonStyles.mdPaddingTop]}>
          <Button title="Login" full onPress={() => navigate(HOME_SCREEN)} />
          <Text>
            Do't have account{' '}
            <Link to={{screen: REGISTER_SCREEN}}>
              <Text
                style={[commonStyles.mdMarginLeft, commonStyles.textColorInfo]}>
                Sign up
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
