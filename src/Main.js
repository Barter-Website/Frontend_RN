import { Button, StyleSheet, Text, View, TextInput, Image, FlatList,SafeAreaView } from 'react-native';
import logo from '../images/logo.png'
import { useState } from 'react';
import categoryIcon from '../images/category.png';
import data from './data.json';
import ProductItem from '../component/ProductItem';
import { ScrollView } from 'react-native-gesture-handler';

export default function Main () {
  const dataList = data.products;
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo}/>
          </View>
          <View style={styles.search}>
            <TextInput style={styles.input} placeholder={"Search"} onChangeText={text => setId(text)}/>
            <Image style={styles.icon} source={categoryIcon}/>
          </View>
          <Text style={styles.title}>Recently Added Products</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={dataList}
            renderItem={({item}) => <ProductItem title={item.title}  cost={item.cost}/>}
            numColumns={2}
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
  search:{
    display:'flex',
    flexDirection:'row',
    width:300
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
      marginTop:20,
      marginBottom:10,
      fontWeight:'bold',
      fontSize:20,
      width:300
  }
});

