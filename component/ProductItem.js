import { useState } from 'react';
import { Image, Text, StyleSheet, View,TouchableOpacity } from 'react-native';
import product from '../images/product.png';
import heart from "../images/heart.png";
import activeHeart from "../images/activeHeart.svg";

export default function ProductItem(props){
    const [isLike, setIsLike] = useState(props.like);

    const toggleClick=()=>{
        setIsLike(isLike => !!!isLike)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.like} onPress={toggleClick}>
                <Image style={styles.likeButton} source={isLike ? activeHeart : heart}/>
            </TouchableOpacity>
          <TouchableOpacity onPress={props.onPress}>
            <Image style={styles.productImg} source={product}/>
            <Text style={styles.seller}>{props.seller}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{props.title}</Text>
          </TouchableOpacity>
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
    like:{
        position:'absolute',
        right:10,
        top:10,
        width:30,
        height:30,
        backgroundColor:'#ffffff',
        borderRadius:'50%',
        borderColor:'#EAEAEA',
        borderWidth:1,
        zIndex:2
        
    },
    likeButton:{
        width:16,
        height:13,
        margin:'auto',
        objectFit:'fill'
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