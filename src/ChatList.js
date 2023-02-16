import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import user from '../images/profile.png';

export default function chatList (props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Image style={styles.profile} source={user}/>
        <View style={styles.text}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.lastChat}>마지막 대화</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    width:300,
    height:75,
    paddingTop:15,
    borderBottomWidth:2,
    borderColor:'#EEEEEE',
    display:'flex',
    flexDirection:'row'
  },
  profile:{
    width:45,
    height:45,
    marginRight:10
  },
  text:{
    textAlign:'left',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    height:45
  },
  name:{
    fontSize:12,
    fontWeight:'bold',
    marginBottom:5
  },
  lastChat:{
    fontSize:11
  }
});

