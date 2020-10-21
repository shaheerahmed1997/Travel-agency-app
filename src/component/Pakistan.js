import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {useNavigation } from '@react-navigation/native';



const Pakistan=()=>{
  const navigation = useNavigation();
    return(
    <View style={{flex:1,}}>
          
          
          <View style={{marginLeft:10,borderWidth:1,width:301,height:403,borderRadius:15,borderColor:"#dddddd",marginTop:10}}>
          <Image
          style={{width:300,height:290,borderRadius:15,}}
          source={require('../assets/T_pakistan.jpg')}
          
          />
          <Text style={{fontWeight:"bold",marginTop:5}}>{'->'} Hunza,Swat,Kashmir</Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Rs 10000 Per Person </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 10 Days Tour </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 3 Times Meal</Text>
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

          export default Pakistan;