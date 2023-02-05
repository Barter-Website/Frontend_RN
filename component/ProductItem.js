import { Image, Text, StyleSheet, View } from 'react-native';
import product from '../images/product.png'

export default function ProductItem(props){
    return (
        <View style={styles.container}>
          <Image style={styles.productImg} source={product}/>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{props.title}</Text>
          <Text style={styles.cost}>{props.cost}</Text>
        </View>
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
    title:{
        fontSize:16,
        width:110,
        marginBottom:5,
        fontWeight:'bold'
    },
    cost:{
        fontSize:14,
        width:110,
        marginBottom:15,
        fontWeight:'bold'
    }
  });