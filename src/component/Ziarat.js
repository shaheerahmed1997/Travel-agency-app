import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {useNavigation } from '@react-navigation/native';


const Ziaratpack=()=>{
  const navigation = useNavigation();
    return(
    <View style={{flex:1}}>
          
          
          <View style={{marginLeft:10,borderWidth:1,width:301,height:420,borderRadius:15,borderColor:"#dddddd",marginTop:10,}}>
          <Image
          style={{width:300,height:290,borderRadius:15,}}
          source={require('../assets/T_ziarat.jpg')}
          
          />
          <Text style={{fontWeight:"bold",marginTop:5}}>{'->'} Iraq,Iran,Sham</Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Rs 300000 only </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 13 Days Trip </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 3 Time Meal </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Hotel and Taxi </Text>
          <TouchableOpacity style={{width:300,height:30,backgroundColor:"#00ced1",borderBottomLeftRadius:15,borderBottomRightRadius:15}}
          onPress={()=>{navigation.navigate('Registration')}}
          
          >
            <Text style={{marginLeft:100,fontSize:20}}> 
              Buy Now
            </Text>

          </TouchableOpacity>
          </View>
        
          
          </View>
    )
}

          export default Ziaratpack;