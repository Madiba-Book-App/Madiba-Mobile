import React from 'react';
import {View, Text} from 'react-native';
import commonStyles from '../../assets/styles';
import styles from './styles';

const Home = () => {
  return (
    <View style={[styles.container]}>
      <View style={[commonStyles.bgColorDanger]}>
        <Text style={styles.text}>Welcome to madiba mobile app</Text>
      </View>
    </View>
  );
};

export default Home;
