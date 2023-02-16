import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CategoryButton(props) {
  return (
    <TouchableOpacity style={props.selected?styles.selectedButton:styles.button} onPress={props.onPress}><Text style={props.selected?styles.selectedText:styles.text}>{props.title}</Text></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      height:30,
      backgroundColor:'#ffffff',
      borderWidth:2,
      borderColor:'#FFBC25',
      borderRadius:15,
      marginRight:7,
      marginLeft:7,
      paddingRight:23,
      paddingLeft:23,
      marginBottom:10
    },
    text:{
        color:'#FFBC25',
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:14,
        marginTop:7
    },
    selectedButton:{
      height:30,
      backgroundColor:'#FFBC25',
      borderWidth:2,
      borderColor:'#FFBC25',
      borderRadius:15,
      marginRight:7,
      marginLeft:7,
      paddingRight:23,
      paddingLeft:23,
      marginBottom:10
    },
    selectedText:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:14,
      textAlign:'center',
      lineHeight:14,
      marginTop:7
    },
  });