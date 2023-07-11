import React from 'react';
import {Text, View} from 'react-native';
import style from './style.js';

const Home = () => {
  alert(9);
  return (
    <View style={style.background}>
      <Text style={style.title}>hello</Text>
    </View>
  );
};

export default Home;
