import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import searchIcon from '../images/search.png';
import ProductItem from '../component/ProductItem';
import { ScrollView } from 'react-native';
import Logo from '../component/Logo';
import chatData from './chatData.json';
import ChatList from './ChatList';

export default function Chat ({navigation}) {
  const [search, setSearch] = useState('');
  const chatList = chatData.chatList;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Logo/>
            <View style={styles.search}>
              <TextInput style={styles.input} placeholder={"Search"} onChangeText={text => setId(text)}></TextInput>
            </View>
            <View style={styles.IconContainer}>
                <TouchableOpacity onPress={()=>{}}><Image style={styles.searchIcon} source={searchIcon}/></TouchableOpacity>
            </View>
            <FlatList
              style={styles.chatList}
              keyExtractor={item => item.id}
              data={chatList}
              renderItem={({item}) => <ChatList name={item.name} onPress={()=>{navigation.navigate('Chatting', {name:item.name})}}/>}
            />
        </View>
      </ScrollView>
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
  search:{
    display:'flex',
    flexDirection:'row',
    width:300
  },
  IconContainer:{
    position:'relative'
  },
  searchIcon:{
    position:'absolute',
    width:24,
    height:24,
    bottom:10,
    left:110
  },
  input:{
    width:300,
    height:40,
    backgroundColor:'#F1F1F1',
    borderRadius:12,
    padding:10,
    marginRight:10
  },
  icon:{
    width:40,
    height:40
  },
  title:{
      marginBottom:10,
      fontWeight:'bold',
      fontSize:20,
      width:300
  },
  chatList:{
    marginTop:10
  }
});

