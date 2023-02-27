import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import searchIcon from '../images/search.png';
import ProductItem from '../component/ProductItem';
import { ScrollView } from 'react-native';
import chatData from './chatData.json';
import ChatList from './ChatList';
import arrow from '../images/arrow.png';
import send from '../images/send.png';

export default function Chatting ({navigation:navigation, route:route}) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.name}>{route.params.name}</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('BottomNav')}}><Image style={styles.arrow}source={arrow}/></TouchableOpacity>
        </View>


      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        </View>
      </ScrollView>
      
      <View style={styles.typeContainer}>
            <TextInput style={styles.input} onChangeText={text => setId(text)}></TextInput>
            <TouchableOpacity><Image style={styles.sendIcon} source={send}/></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView:{
    showsHorizontalScrollIndicator:'false',
  },
  header:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    position:'relative',
    height:44,
    marginBottom:20,
    marginTop:20,
    paddingBottom:20,
    borderBottomColor:'#EEEEEE',
    borderBottomWidth:2
  },
  arrow:{
    width:24,
    let:0,
    height:24,
    position:'absolute',
    top:0,
    marginLeft:30
  },
  name:{
    fontSize:24,
    fontWeight:'bold',
    width:'100%',
    lineHeight:24,
    textAlign:'center',
    position:'absolute',
    top:0,
    left:0
  },
  typeContainer:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    marginBottom:20,
    borderTopColor:'#EEEEEE',
    borderTopWidth:2,
    justifyContent:'center'
  },
  input:{
    flex:1,
    height:40,
    backgroundColor:'#F1F1F1',
    borderRadius:12,
    padding:10,
    marginRight:10
  },
  sendIcon:{
    width:40,
    height:40
  },
});

