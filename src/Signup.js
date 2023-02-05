import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import logo from '../images/logo.png'
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import { useState } from 'react';

export default function Signup({navigation}) {

  const navLogin=()=>{
    navigation.navigate('Login')
  }
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [nickname, setNickname] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>SignUp</Text>
      <Text style={styles.subTitle}>돈 없이 거래하는 중고 물물교환</Text>
      <CustomInput text={"아이디"} onChangeText={text => setId(text)}/>
      <CustomInput text={"비밀번호"} onChangeText={text => setPw(text)}/>
      <CustomInput text={"비밀번호 확인"} onChangeText={text => setPwCheck(text)}/>
      <CustomInput text={"닉네임"} onChangeText={text => setNickname(text)}/>
      <CustomButton text={"회원가입"} onPress={navLogin}/>
      <Text style={styles.loginText}>이미 회원이신가요? <Text style={styles.loginButton} onPress={() => navigation.navigate('Login')}>로그인</Text></Text>
      <Image style={styles.logo} source={logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle:{
      marginTop:30,
      fontWeight:'bold',
      fontSize:40,
      width:300
  },
  subTitle:{
    fontWeight:'bold',
    fontSize:18,
    color: '#999999',
    width:300,
    marginBottom:15
  },
  loginText:{
    fontSize:16,
    marginTop:15,
    marginBottom:50
  },
  loginButton:{
    color:'#FFBC25'
  },
  logo:{
    width:150,
    height:32,
    resizeMode:'fill'
  }
});

