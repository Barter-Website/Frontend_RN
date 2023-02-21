import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import logo from '../images/logo.png'
import { useState } from 'react';
import categoryIcon from '../images/category.png';
import searchIcon from '../images/search.png';
import data from './data.json';
import ProductItem from '../component/ProductItem';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryButton from '../component/CategoryButton';
import Category from './Category';
import Logo from '../component/Logo';

export default function Main ({navigation}) {
  const dataList = data.products;
  const [search, setSearch] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <SafeAreaView style={visibleModal?styles.modalvisibleContainer:styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={visibleModal?styles.modalvisibleContainer:styles.container}>
            <Logo/>
            <View style={styles.search}>
              <TextInput style={styles.input} placeholder={"Search"} onChangeText={text => setId(text)}></TextInput>
              <TouchableOpacity onPress={()=>{setVisibleModal(true)}}><Image style={styles.icon} source={categoryIcon}/></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{}}><Image style={styles.searchIcon} source={searchIcon}/></TouchableOpacity>
            <Text style={styles.title}>Recently Added Products</Text>
            <FlatList
              keyExtractor={item => item.id}
              data={dataList}
              renderItem={({item}) => <ProductItem title={item.title} seller={item.seller} like={item.like} onPress={()=>{navigation.navigate('Detail', {title:item.title, seller:item.seller, description:item.description})}}/>}
              numColumns={2}
            />
            <Category visible={visibleModal} onPress={()=>{setVisibleModal(false)}}/>
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
  modalvisibleContainer: {
    width:'100vw',
    height:'100vh',
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
  searchIcon:{
    position:'relative',
    bottom:32,
    left:80,
    width:24,
    height:24
  },
  input:{
    width:250,
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
  }
});

