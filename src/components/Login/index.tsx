import React, {useState} from 'react';
import {Link, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import storage from 'src/utils/mmkvStorage';

import commonStyles from 'src/assets/styles';
import Button from '../common/Button';
import Input from '../common/Input';
import {HOME_SCREEN, REGISTER_SCREEN} from 'src/constants/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {usePostRequest} from 'src/queryHooks/interfaces/useRequest';
import {LOGIN} from 'src/queryHooks/constants/keys';

interface Props {}

const Register = (props: Props) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any, any>>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const {mutate, isLoading, error} = usePostRequest('/auth/login', LOGIN, {
    onSuccess: data => {
      console.log('data', data);
      if (data?.status === 200) {
        storage.set('token', data.token);
        navigate(HOME_SCREEN);
      }
    },
  });

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
          <Input
            placeholder="Enter your email"
            label="Email"
            onChangeText={event => setEmail(event)}
          />
          <Input
            secureTextEntry
            placeholder="Enter password"
            label="Password"
            onChangeText={event => setPassword(event)}
          />
        </View>
        <View style={[commonStyles.mdPaddingTop]}>
          <Button
            title="Login"
            full
            onPress={() =>
              mutate({
                email,
                password,
              } as any)
            }
          />
          <Text>
            Do't have account
            <Link to={{screen: REGISTER_SCREEN}}>
              <Text
                style={[commonStyles.mdMarginLeft, commonStyles.textColorInfo]}>
                {' '}
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
