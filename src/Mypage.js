import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import logo from '../images/logo.png'
import { useState } from 'react';
import data from './data.json';
import ProductItem from '../component/ProductItem';
import CustomInput from '../component/CustomInput';
import HistoryItem from '../component/HistoryItem'
import { ScrollView } from 'react-native';
import profile from '../images/profile.png';

export default function Mypage () {
  const dataList = data.products;
  const historyList = data.history;

  const[nickname, setNickname] = useState('');
  const[pw, setPw] = useState('');
  const[pwCheck, setPwCheck] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo}/>
          </View>
          <View style={styles.profileContainer}>
            <Image style={styles.profile} source={profile}/>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.uploadButton}><Text style={styles.uploadText}>이미지 업로드</Text></TouchableOpacity>
              <TouchableOpacity style={styles.removeButton}><Text style={styles.removeText}>이미지 제거</Text></TouchableOpacity>
            </View>
          </View>
          <CustomInput text={"닉네임"} value={nickname}/>
          <CustomInput text={"비밀번호"}/>
          <CustomInput text={"비밀번호 확인"}/>
          <TouchableOpacity style={styles.modifyButton}><Text style={styles.uploadText}>변경</Text></TouchableOpacity>
          <Text style={styles.title}>Like</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={dataList}
            renderItem={({item}) => <ProductItem title={item.title} cost={item.cost}/>}
            numColumns={2}
          />
          <Text style={styles.title}>Trade HIstory</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={historyList}
            renderItem={({item}) => <HistoryItem myProduct={item.myProduct} exchangeProduct={item.exchangeProduct}/>}
            numColumns={1}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView:{
    showsHorizontalScrollIndicator:'false'
  },
  logoContainer:{
    width:300,
    marginBottom:30,
    marginTop:30
  },
  logo:{
    width:150,
    height:32,
    resizeMode:'fill'
  },
  profileContainer:{
    display:'flex',
    width:300,
    flexDirection:'row',
    alignItems:'center'
  },
  profile:{
    width:100,
    height:100
  },
  buttonContainer:{
    display:'flex',
    width:180,
    marginLeft:20,
    flexDirection:'column'
  },
  uploadButton:{
    width:180,
    height:30,
    backgroundColor:'#FFBC25',
    borderRadius:15,
    marginBottom:10
  },
  uploadText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center',
    lineHeight:35
  },
  removeButton:{
    width:180,
    height:30,
    borderRadius:15,
    backgroundColor:'#fff',
    borderColor:'#FFBC25',
    borderWidth:1
  },
  removeText:{
    color:'#FFBC25',
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center',
    lineHeight:35
  },
  modifyButton:{
    width:80,
    height:30,
    backgroundColor:'#FFBC25',
    borderRadius:15,
    marginBottom:10,
    marginTop:10,
    marginLeft:220
  },
  title:{
      marginTop:15,
      marginBottom:10,
      fontWeight:'bold',
      fontSize:20,
      width:300
  }
});

