import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './src/Login';
import Signup from './src/Signup';
import Main from './src/Main';
import Mypage from './src/Mypage';
import Detail from './src/Detail';
import ProductItem from './component/ProductItem';
import Post from './src/Post';
import Chat from './src/Chat';
import Chatting from './src/Chatting';

const StackNav=()=>{
  const Stack = createStackNavigator();

  return(
    <Stack.Navigator>
      <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown: false}}/>
      <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
      <Stack.Screen name="Chatting" component={Chatting} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const BottomNav=()=>{
  const Tab = createBottomTabNavigator();
  return(
      <Tab.Navigator style={styles.container}>
        <Tab.Screen name="Main" component={Main} options={{headerShown: false}}/>
        <Tab.Screen name="Post" component={Post} options={{headerShown: false}}/>
        <Tab.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
        <Tab.Screen name="Mypage" component={Mypage} options={{headerShown: false}}/>
      </Tab.Navigator>
  )
}


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="StackNav" component={StackNav} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
