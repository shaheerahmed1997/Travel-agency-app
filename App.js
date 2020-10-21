import 'react-native-gesture-handler';
import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Form from './src/component/Form';
import Signup from './src/pages/Signup';
import Loggedin from './src/pages/Loggedin';
import Registration from './src/pages/Registration';
import Review from './src/pages/bottomtabs/Review';
import info from './src/pages/info';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './src/component/DrawerContent';
import Designtour from './src/pages/bottomtabs/Designtour';
import Contactus from './src/pages/drawertabs/Contactus';


const stack = createStackNavigator();
const drawer = createDrawerNavigator();
const bottomtab = createBottomTabNavigator();

const drawerRoute = ()=>{
  return(

  <drawer.Navigator initialRouteName = "Loggedin"  drawerContent={props => <DrawerContent {...props}/>}>
    <drawer.Screen name="home" component={bottomtabsRoute}/>
    <drawer.Screen name="Contactus" component={Contactus}/>
    
    


  </drawer.Navigator>
  )
}
const bottomtabsRoute = ()=>{
  return(

  <bottomtab.Navigator initialRouteName = "Loggedin" tabBarOptions={{
    activeTintColor:"#00ced1",
    activeBackgroundColor:"#455a64"
    
  }}>
    <bottomtab.Screen name="home" component={Loggedin}
    options={{
      tabBarIcon:({color})=><Icon
      name="home"
      size={30}
      color={color}
      
      />
    }}
    />
    <bottomtab.Screen name = "Design a tour" component = {Designtour} 
    options={{
      tabBarIcon:({color})=><Icon
      name="bus"
      size={30}
      color={color}
      
      />
    }}
    />
    
    <bottomtab.Screen name = "Reviews" component = {Review}
    options={{
      tabBarIcon:({color})=><Icon
      name="newspaper-o"
      size={30}
      color={color}
      
      />
    }}
    />
  </bottomtab.Navigator>
  )
}





class App extends Component {  
  state={
    loggedstatus:null

  }
  UNSAFE_componentWillMount()
  {
      firebaseConfig = {
        apiKey: "AIzaSyAlrEvYSkyD1Xk65fD0eewjJBBcKoWh5xA",
        authDomain: "agency-88a9b.firebaseapp.com",
        databaseURL: "https://agency-88a9b.firebaseio.com",
        projectId: "agency-88a9b",
        storageBucket: "agency-88a9b.appspot.com",
        messagingSenderId: "152872588740",
        appId: "1:152872588740:web:8898e29e3b279bf5040091",
        measurementId: "G-9DWYDGZ7M7"
      }
      if(!firebase.apps.length)
      {
        firebase.initializeApp(firebaseConfig)

      }
      firebase.auth().onAuthStateChanged((user)=>{
      if(user)
      {
          this.setState({loggedstatus:true})
      }
      else{
        this.setState({loggedstatus:false})
      }

        
    }
      )
  }
  renderContent()
  {

    if(this.state.loggedstatus)
    {
      return "Loggedin"
    }
    else{
      return "Form"
    }
  }

  
  
  render()
  {
    if(this.state.loggedstatus)
    {
      return (
    
        <NavigationContainer>
          
        <View >
          <StatusBar
          backgroundColor = "#1c313a"
          barStyle = "light-content"
          />
        </View>
        <stack.Navigator initialRouteName="Loggedin" headerMode="screen" >
          <stack.Screen name="Form" component={Form}   options={{headerShown:false}}/>
          <stack.Screen name ="Signup" component={Signup} options={{title:"Creating New Account",headerStyle:{
            backgroundColor:"#455a64",
          },
          headerTintColor:"#00ced1",
          headerTitleStyle:{
            color:"white",
          }
          }}/>
          <stack.Screen name="Loggedin" component={drawerRoute} options={{headerShown:false}}/>
          <stack.Screen name="Registration" component={Registration} options={{title:"Registration"}}/>
          <stack.Screen name = "info" component = {info} options={{title:"  About Us",headerStyle:{
    
            backgroundColor:"#00ced1"
          }}}/>
         
      <stack.Screen name = "Contactus" component = {Contactus} options={{title:"Contact Us",headerShown:true,headerTitleStyle:{
        color:"#00ced1"
      }}}/>
          
        </stack.Navigator>
        
        
        </NavigationContainer>
       
       
        
    
      )
     
    }
    else if(this.state.loggedstatus == false)
    {
   
  return (
    
    <NavigationContainer>
      
    <View >
      <StatusBar
      backgroundColor = "#1c313a"
      barStyle = "light-content"
      />
    </View>
    <stack.Navigator initialRouteName="Form" headerMode="screen" >
      <stack.Screen name="Form" component={Form}   options={{headerShown:false}}/>
      <stack.Screen name ="Signup" component={Signup} options={{title:"Creating New Account",headerStyle:{
        backgroundColor:"#455a64",
      },
      headerTintColor:"#00ced1",
      headerTitleStyle:{
        color:"white",
      }
      }}/>
      <stack.Screen name="Loggedin" component={drawerRoute} options={{headerShown:false}}/>
      <stack.Screen name="Registration" component={Registration} options={{title:"Registration"}}/>
      <stack.Screen name = "info" component = {info} options={{title:"  About Us",headerStyle:{

        backgroundColor:"#00ced1"
      }}}/>
     
  <stack.Screen name = "Contactus" component = {Contactus} options={{title:"Contact Us",headerShown:true,headerTitleStyle:{
    color:"#00ced1"
  }}}/>
      
    </stack.Navigator>
    
    
    </NavigationContainer>
   
   
    

  )
}
else{
  return(
  <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
  <ActivityIndicator
  size="large"
  />
  </View>
  )

}
}
}
export default App;
