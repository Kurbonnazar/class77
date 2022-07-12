import * as React  from "react"
import "react-native-gesture-handler"
import {Text, View} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./Screens/Home"
import IssLocationScreen from "./Screens/IssLocation"
import MeteorScreen from "./Screens/Meteor"
const Stack=createStackNavigator()
export default class App extends React.Component{
render(){
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="IssLocation" component={IssLocationScreen}/>
            <Stack.Screen name="Meteor" component={MeteorScreen}/>

          </Stack.Navigator>
        </NavigationContainer>
    )
}
}
