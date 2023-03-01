import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import data from './data.json';
import { ScrollView } from 'react-native';
import product from '../images/product2.png';
import CustomInput from '../component/CustomInput';
import CategoryButton from '../component/CategoryButton';
import photo from '../images/photo.png';
import Logo from '../component/Logo';
import * as ImagePicker from 'expo-image-picker';

export default function Post () {

  const[nickname, setNickname] = useState('');
  const[pw, setPw] = useState('');
  const[pwCheck, setPwCheck] = useState('');
  const district = ["서울", "인천","경기","대전", "대구", "부산", "강원", "광주","울산","경남", "경북", "전남", "전북","제주"];
  const product = ["생활", "가구", "유아", "의류", "취미", "식품", "식물", "디지털기기"]
  const [selectedP, setSelectedP] =useState('');
  const [selectedD, setSelectedD] = useState('');

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


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Logo/>
            <TouchableOpacity style={styles.photo} onPress={uploadImage}>
              {imageUrl?<Image style={styles.image} source={{url:imageUrl}}/>:<Image style={styles.icon}source={photo}/>}
            </TouchableOpacity>
            <CustomInput text={"글 제목"}/>
            <View>
                <Text style={styles.title}>내용</Text>
                <TextInput style={styles.input} multiline={true}/>
            </View>
            <Text  style={styles.title}>상품 카테고리</Text>
            <FlatList
            keyExtractor={item => item}
            data={product}
            renderItem={({item}) => <CategoryButton selected={selectedP==item} title={item} onPress={()=>{setSelectedP(item)}}/>}
            numColumns={3}
            style={styles.category}/>
            <Text style={styles.title}>지역 카테고리</Text>
            <FlatList
                keyExtractor={item => item}
                data={district}
                renderItem={({item}) => <CategoryButton selected={selectedD==item}title={item} onPress={()=>{setSelectedD(item)}}/>}
                numColumns={3}
                style={styles.category}/>
                <TouchableOpacity style={styles.button}><Text style={styles.text}>등록</Text></TouchableOpacity>
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
  },
  photo:{
    width:90,
    height:90,
    borderRadius:10,
    borderColor:'#C4C4C4',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    marginRight:200,
  },
  image:{
    width:90,
    height:90,
    borderRadius:10,
  },
  icon:{
    width:30,
    height:25,
    margin:'auto'
  },
  title:{
    fontWeight:'bold',
   fontSize:16,
   color:'#999999',
   height:20,
   marginTop:15,
    width:300
  },
  input:{
    width:300,
    height:180,
    backgroundColor:'#F1F1F1',
    borderRadius:12,
    padding:10,
    width:300,
    marginBottom:10,
    textAlignVertical:'top'
  },
  category:{
    marginRight:40,
    marginTop:10
  },
  button: {
    height:40,
    width:300,
    backgroundColor:'#FFBC25',
    borderRadius:15,
    marginRight:8,
    marginLeft:8,
    paddingRight:23,
    paddingLeft:23,
    marginTop:20,
    marginBottom:20
  },
  text:{
      color:'#ffffff',
      fontSize:18,
      fontWeight:'bold',
      textAlign:'center',
      lineHeight:18,
      marginTop:11
  }
});

