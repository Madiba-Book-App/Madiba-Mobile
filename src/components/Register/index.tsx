import {Link} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import commonStyles from 'src/assets/styles';
import {LOGIN_SCREEN} from 'src/constants/screens';
import Button from '../common/Button';
import Input from '../common/Input';

interface Props {}

const Register = (props: Props) => {
  return (
    <View
      style={[
        commonStyles.flex1,
        commonStyles.bgColorPrimary,
        commonStyles.xlgPaddingTop,
      ]}>
      <View
        style={[
          commonStyles.bgColorWhite,
          commonStyles.mdPadding,
          commonStyles.flex1,
          commonStyles.xlgMarginTop,
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
          <Input placeholder="Enter your full name" label="Name" />
          <Input placeholder="Enter your email" label="Email" />
          <Input placeholder="Enter your phone number" label="Phone number" />
          <Input
            secureTextEntry
            placeholder="Enter password"
            label="Password"
          />
        </View>
        <View style={[commonStyles.mdPaddingTop]}>
          <Button title="Sign up" full />
          <Text>
            Already have any account{' '}
            <Link to={{screen: LOGIN_SCREEN}}>
              <Text
                style={[
                  commonStyles.smPaddingLeft,
                  commonStyles.textColorInfo,
                ]}>
                Login
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
