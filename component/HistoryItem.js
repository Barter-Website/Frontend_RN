import { Image, Text, StyleSheet, View } from 'react-native';
import product from '../images/product.png';
import exchange from '../images/exchange.png';

export default function HistoryItem(props){
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Image style={styles.productImg} source={product}/>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{props.myProduct}</Text>
            </View>
           <Image source={exchange} style={styles.exchange}/>
           <View>
                <Image style={styles.productImg} source={product}/>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{props.exchangeProduct}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:300,
        alignItems:'center',
        backgroundColor:'#F3F3F3',
        borderRadius:14,
        margin:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    itemContainer:{
        width:110,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    exchange:{
        width:25,
        height:25
    },
    productImg: {
      width:110,
      height:110,
      marginTop:10,
      marginBottom:10
    },
    title:{
        textAlign:'center',
        fontSize:16,
        width:110,
        marginBottom:20,
        fontWeight:'bold'
    }
  });