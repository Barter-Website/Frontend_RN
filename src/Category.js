import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import data from './data.json';
import CategoryButton from '../component/CategoryButton';

export default function Category (props) {
  const district = ["서울", "인천","경기","대전", "대구", "부산", "강원", "광주","울산","경남", "경북", "전남", "전북","제주"];
  const product = ["생활", "가구", "유아", "의류", "취미", "식품", "식물", "디지털기기"]
  const [selectedP, setSelectedP] = useState([]);
  const [selectedD, setSelectedD] = useState([])

 return (
    <View style={props.visible?styles.back:''}>
        <View style={props.visible?styles.container:styles.invisible}>
            <Text style={styles.title}>Product</Text>
            <FlatList
                keyExtractor={item => item}
                data={product}
                renderItem={({item}) => <CategoryButton title={item}/>}
                numColumns={3}/>
            <Text style={styles.title}>District</Text>
            <FlatList
                keyExtractor={item => item}
                data={district}
                renderItem={({item}) => <CategoryButton title={item}/>}
                numColumns={3}/>
            <TouchableOpacity style={styles.button} onPress={props.onPress}><Text style={styles.text}>확인</Text></TouchableOpacity>
        </View>
    </View>
    )
}
const styles=StyleSheet.create({
    back:{
        zIndex:2,
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'#00000080',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    container:{
        width:300,
        height:500,
        borderRadius : 15,
        backgroundColor :'#ffffff',
        paddingTop:20,
        paddingRight:15,
        zIndex:2,
        top:80,
        position:'absolute',
    
        paddingLeft:15
    },
    invisible:{
        display:'none'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:5
    },
    button: {
        height:30,
        backgroundColor:'#FFBC25',
        borderRadius:15,
        marginRight:8,
        marginLeft:8,
        paddingRight:23,
        paddingLeft:23,
        marginBottom:20
      },
      text:{
          color:'#ffffff',
          fontSize:14,
          fontWeight:'bold',
          textAlign:'center',
          lineHeight:14,
          marginTop:8
      }
})