import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image,Span } from 'react-native';
import CustomButton from '../component/CustomButton';
import CustomInput from '../component/CustomInput';
import logo from '../images/logo.png'

export default function Login({navigation}) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Login</Text>
      <Text style={styles.subTitle}>다양한 형태의 교환에 참여해 보세요!</Text>
      <CustomInput text={"아이디"} onChangeText={text => setId(text)}/>
      <CustomInput text={"비밀번호"} onChangeText={text => setPw(text)}/>
      <Text style={styles.findPw}>비밀번호 찾기</Text>
      <CustomButton style={styles.loginButton} text={"로그인"} onPress={()=>navigation.navigate('BottomNav')}/>
      <Text style={styles.signupText}>아직 회원이 아니신가요? <Text style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>회원가입</Text></Text>
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
        marginTop:50,
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
    findPw:{
      fontSize:14,
      width:300,
      marginTop:3,
      color:'#FFBC25'
    },
    signupText:{
      fontSize:16,
      marginTop:15,
      marginBottom:50
    },
    signupButton:{
      color:'#FFBC25'
    },
    logo:{
      width:150,
      height:32,
      resizeMode:'fill'
    }
  });

