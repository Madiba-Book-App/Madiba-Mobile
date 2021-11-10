import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <View style={[styles.container]}>
      <View>
        <Text style={styles.text}>Welcome to madiba mobile app</Text>
      </View>
    </View>
  );
};

export default Home;
