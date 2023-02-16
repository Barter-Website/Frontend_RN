import { Image, Text, StyleSheet, View,TouchableOpacity } from 'react-native';
import product from '../images/product.png'

export default function ProductItem(props){
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
          <Image style={styles.productImg} source={product}/>
          <Text style={styles.seller}>{props.seller}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width:140,
        alignItems:'center',
        backgroundColor:'#F3F3F3',
        borderRadius:14,
        margin:10
    },
    productImg: {
      width:110,
      height:110,
      marginTop:10,
      marginBottom:10
    },
    seller:{
        fontSize:14,
        width:110,
        fontWeight:'bold'
    },
    title:{
        fontSize:16,
        width:110,
        marginBottom:15,
        fontWeight:'bold'
    }
  });