import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class LoginScreen extends Component{

    state = {email : '', password : ''}

    login = async() => {
        if(this.state.email && this.state.password){
            const login = await firebase.auth().signInWithEmailAndPassword(
                this.state.email, this.state.password
            )
            if(login){
                alert(' You have entered into the app ');
            }
        }
    }

    signup = async() => {
        if(this.state.email && this.state.password){
            const signup = await firebase.auth().createUserWithEmailAndPassword(
                this.state.email, this.state.password
            )
            if(signup){
                alert('You have been added')
            }
        }
    }

  render(){
    return(
      <View style = {{backgroundColor : 'lightbue'}}>
        <Text style = {style.appHeading}> LoginScreen </Text>
        <Image source = {require('../assets/santa.png')} style = {{
            width : 200,
            height : 200,
            alignSelf : 'center',
            marginTop : 30,
            marginBottom : 30
        }}></Image>
        <TextInput onChangeText = {(text) => {
            this.setState({
                email : text
            })
        }} placeholder = 'Enter email' style = {style.appHeading}></TextInput>
        <TextInput onChangeText = {(text) => {
            this.setState({
                email : text
            })
        }} placeholder = 'Enter password' secureTextEntry = {true} style = {style.appHeading}></TextInput>
        <TouchableOpacity onPress = {() => {
            this.login();
        }}><Text style = {style.button}> Login </Text></TouchableOpacity>
        <TouchableOpacity onPress = {() => {
            this.signup();
        }}><Text style = {style.button}> Signup </Text></TouchableOpacity>
      </View>
    )
  }
}

var style = StyleSheet.create({
    appHeading : {
        display : 'flex',
        color : '#44c662',
        backgroundColor : '#f23a3a',
        textAlign : 'center',
        justifyContent : 'center',
        width : '100%',
        height : 50,
        fontSize : 40,
        fontFamily : 'bradley hand'
    },

    TextInput : {
        display : 'flex',
        color : '#ffc300',
        backgroundColor : '#6b0848',
        textAlign : 'center',
        justifyContent : 'center',
        width : '100%',
        height : 50,
        fontSize : 50,
        fontFamily : 'bradley hand',
        borderRadius : 40,
        marginTop : 30
    },

    button : {
        display : 'flex',
        color : '#ffc300',
        backgroundColor : '#6b0848',
        textAlign : 'center',
        justifyContent : 'center',
        width : '100%',
        height : 50,
        fontSize : 50,
        fontFamily : 'bradley hand',
        borderRadius : 40,
        marginTop : 10
    }
})