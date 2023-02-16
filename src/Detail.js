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
      <ScrollView style={styles.scrollView}>
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
    minHeight:'calc(100vh - 435px)',
    backgroundColor:'#F3F3F3',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:30,
    position:'relative'
  },
  seller:{
    fontSize:12,
    fontWeight:'bold'
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  des:{
    fontSize:14
  },
  chatButton:{
    width:100,
    height:30,
    backgroundColor:'#FFBC25',
    borderRadius:15,
    marginBottom:10,
    marginLeft:180,
    bottom:10,
    position:'absolute'
  },
  chatText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center',
    lineHeight:14,
    marginTop:8
  }
});

