import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import data from './data.json';
import { ScrollView } from 'react-native';
import arrow from '../images/arrow.png';
import product from '../images/product2.png';

export default function Detail ({navigation:navigation,route: route}) {
  const dataList = data.products;
  const historyList = data.history;

  const[nickname, setNickname] = useState('');
  const[pw, setPw] = useState('');
  const[pwCheck, setPwCheck] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('BottomNav')}>
                  <Image style={styles.arrow} source={arrow}/>
                </TouchableOpacity>
            </View>
            <Image style={styles.product} source={product}/>
            <View style={styles.desContainer}>
                <Text style={styles.seller}>{route.params.seller}</Text>
                <Text style={styles.title}>{route.params.title}</Text>
                <Text style={styles.desText}>{route.params.description}</Text>
                <TouchableOpacity style={styles.chatButton}><Text style={styles.chatText}>CHAT</Text></TouchableOpacity>
            </View>
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
  scrollView:{
    showsHorizontalScrollIndicator:'false'
  },
  arrowContainer:{
    width:320,
    height:25,
    marginBottom:30,
    marginTop:30
  },
  arrow:{
    width:25,
    height:25,
  },
  product:{
    width:300,
    height:300,
    marginBottom:50
  },
  desContainer:{
    width:340,
    backgroundColor:'#F3F3F3',
    borderRadius:30,
    position:'relative',
    display:'flex',    
    minHeight:'35%',
    flexDirection:'column'
  },
  seller:{
    marginTop:20,
    paddingLeft:30,
    fontSize:12,
    fontWeight:'bold'
  },
  title:{
    fontSize:20,
    paddingLeft:30,
    fontWeight:'bold'
  },
  desText:{
    paddingLeft:30,
    paddingRight:30,
    fontSize:14,
    minHeight:'40%',
    marginBottom:80
  },
  chatButton:{
    width:100,
    height:30,
    backgroundColor:'#FFBC25',
    borderRadius:15,
    marginBottom:10,
    marginLeft:210,
    bottom:10,
    marginRight:30,
    position:'absolute'
  },
  chatText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center',
    lineHeight:14,
    marginTop:9
  }
});

