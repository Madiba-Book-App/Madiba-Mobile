import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';

import Header from '../common/Header';

import commonStyles from '../../assets/styles';
import {Link} from '@react-navigation/native';
import Card from '../common/Card';
import Explore from '../common/Explore';
const Home = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Third Item',
    },
  ];
  const renderItem = () => {
    return (
      <View style={[commonStyles.lgPaddingLeft]}>
        <Card />
      </View>
    );
  };
  const renderExploreItem = () => {
    return (
      <View style={[commonStyles.lgPaddingLeft, commonStyles.lgPaddingTop]}>
        <Explore />
      </View>
    );
  };
  return (
    <View style={[styles.container]}>
      <View style={[commonStyles.mdPadding]}>
        <Header />
        <View
          style={[
            commonStyles.lgPaddingTop,
            commonStyles.flexRow,
            commonStyles.alignItemsCenter,
            commonStyles.justifyContentSpaceBetween,
          ]}>
          <Text style={[commonStyles.bold, commonStyles.mdText]}>Library</Text>
          <Link to="">
            <Text style={[commonStyles.textColorLight]}>See all</Text>
          </Link>
        </View>
      </View>
      <View style={[commonStyles.lgPaddingTop]}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={[commonStyles.xlgPaddingTop]}>
        <View style={[commonStyles.mdPaddingLeft]}>
          <Text style={[commonStyles.mdText, commonStyles.bold]}>Explore</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderExploreItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
