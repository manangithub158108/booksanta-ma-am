import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LoginScreen from './screens/Login';

export default class App extends Component{
  render(){
    return(
      <View>
        <LoginScreen></LoginScreen>
      </View>
    )
  }
}