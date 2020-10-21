import React,{Component} from 'react';
import {View} from 'react-native';
import Headup from '../component/headup';
import Packdetail from '../component/Packdetail';





class Loggedin extends Component{


render()
{ 
  return (
    <View >
<Headup />

<Packdetail />


</View>
  )
  }
  
}

   
export default Loggedin;