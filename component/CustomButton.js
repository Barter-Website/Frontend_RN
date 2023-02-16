import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}><Text style={styles.text}>{props.text}</Text></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      width:330,
      height:50,
      backgroundColor:'#FFBC25',
      borderRadius:15,
      marginTop:50
    },
    text:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:20,
        marginTop:15
    }
  });