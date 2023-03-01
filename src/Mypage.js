import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import logo from '../images/logo.png'
import { useState } from 'react';
import data from './data.json';
import ProductItem from '../component/ProductItem';
import CustomInput from '../component/CustomInput';
import HistoryItem from '../component/HistoryItem'
import { ScrollView } from 'react-native';
import profile from '../images/profile.png';
import Logo from '../component/Logo';
import * as ImagePicker from 'expo-image-picker';

export default function Mypage ({navigation}) {
  const dataList = data.products;
  const historyList = data.history;

  const[nickname, setNickname] = useState('');
  const[pw, setPw] = useState('');
  const[pwCheck, setPwCheck] = useState('');

  const [imageUrl, setImageUrl] = useState('');

  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const uploadImage = async () =>{
    if(!status?.granted){
      const permission = await requestPermission();
      if(!permission.granted){
        return null;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1,1]
    });
    if (result.canceled){
          return null;
    }
    console.log(result);
    setImageUrl(result.uri);
  };

  const removeImage=()=>{
    setImageUrl('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Logo/>
          <View style={styles.profileContainer}>
            {imageUrl?<Image style={styles.profile} source={{url:imageUrl}}/>:<Image style={styles.profile} source={profile}/>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}><Text style={styles.uploadText}>이미지 업로드</Text></TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={removeImage}><Text style={styles.removeText}>이미지 제거</Text></TouchableOpacity>
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
            renderItem={({item}) => <ProductItem title={item.title} like={item.like} onPress={()=>{navigation.navigate('Detail', {title:item.title, seller:item.seller, description:item.description})}}/>}
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
  profileContainer:{
    display:'flex',
    width:300,
    flexDirection:'row',
    alignItems:'center'
  },
  profile:{
    width:100,
    height:100,
    borderRadius:'50%'
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
    fontSize:14,
    textAlign:'center',
    lineHeight:14,
    marginTop:9
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
    fontSize:14,
    textAlign:'center',
    lineHeight:14,
    marginTop:9
  },
  modifyButton:{
    width:80,
    height:30,
    backgroundColor:'#FFBC25',
    borderRadius:15,
    marginBottom:10,
    marginTop:9,
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

