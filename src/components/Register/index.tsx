import {Link, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import storage from 'src/utils/mmkvStorage';

import commonStyles from 'src/assets/styles';
import {HOME_SCREEN, LOGIN_SCREEN} from 'src/constants/screens';
import {usePostRequest} from 'src/queryHooks/interfaces/useRequest';
import Button from '../common/Button';
import Input from '../common/Input';
import {SIGN_UP} from 'src/queryHooks/constants/keys';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {}

const Register = (props: Props) => {
  const [formData, setFormData] = useState<{[key: string]: string | number}>({
    email: '',
    names: '',
    phone: '',
    password: '',
    genreId: '1',
    address: ' kgl',
    subscriptionId: '1',
  });
  const {navigate} = useNavigation<NativeStackNavigationProp<any, any>>();
  const {mutate, isLoading, error} = usePostRequest('/auth/signup', SIGN_UP, {
    onSuccess: data => {
      console.log('data', data);
      if (data?.status === 201) {
        storage.set('token', data.token);
        navigate(HOME_SCREEN);
      }
    },
  });

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
          <Input
            placeholder="Enter your full name"
            label="Name"
            onChangeText={event => setFormData({...formData, names: event})}
          />
          <Input
            placeholder="Enter your email"
            label="Email"
            onChangeText={event => setFormData({...formData, email: event})}
          />
          <Input
            placeholder="Enter your phone number"
            label="Phone number"
            onChangeText={event => setFormData({...formData, phone: event})}
          />
          <Input
            secureTextEntry
            placeholder="Enter password"
            label="Password"
            onChangeText={event => setFormData({...formData, password: event})}
          />
        </View>
        <View style={[commonStyles.mdPaddingTop]}>
          <Button
            title="Sign up"
            full
            onPress={() => mutate(formData as any)}
          />
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
