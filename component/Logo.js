import logo from '../images/logo.png';
import {  StyleSheet, View,Image} from 'react-native';
export default function Logo(){
    return(
        <View style={styles.logoContainer}>
              <Image style={styles.logo} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer:{
        width:300,
        marginBottom:20,
        marginTop:30
      },
      logo:{
        width:150,
        height:32,
        resizeMode:'fill'
      },
})