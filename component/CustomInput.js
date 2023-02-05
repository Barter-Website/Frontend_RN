import { TextInput,Text, StyleSheet, View} from 'react-native';

export default function CustomInput(props) {
  return (
    <View>
        <Text style={styles.title}>{props.text}</Text>
        <TextInput style={styles.input} onChangeText={props.onChangeText} placeholder={props.placeholder} value={props.value}/>
    </View>
  );
}

const styles= StyleSheet.create({
    title:{
        fontWeight:'bold',
       fontSize:16,
       color:'#999999',
       height:20,
       marginTop:15
      },
    input:{
        width:300,
        height:40,
        backgroundColor:'#F1F1F1',
        borderRadius:12,
        padding:10
      },
  });