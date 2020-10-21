import React from 'react';
import {View,Text,TouchableOpacity,Image, StyleSheet} from 'react-native';
import {useNavigation } from '@react-navigation/native';



const Umrahpack=()=>{
  const navigation = useNavigation();
    return(
    <View style={{flex:1,flexDirection:"row"}}>
          
         
          <View style={styles.Viewstyle}>
          <Image
          style={{width:196,height:190,borderRadius:15}}
          source={require('../assets/T_hajj.jpg')}
          
          />
          <View >
          <Text style={{fontWeight:"bold",marginTop:5}}>{'->'} 3 star Package</Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Rs 200000 only </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 3 Nights and 4 days </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Hotel With Taxi Services </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} BreakFast & Dinner Included </Text>
          </View>
          <TouchableOpacity style={styles.buttonstyle}
          onPress={()=>{navigation.navigate('Registration')}}
          
          >
            <Text style={{marginLeft:60,fontSize:18}}> 
              Buy Now
            </Text>

          </TouchableOpacity>
          
          </View>
        
  
          
          <View style={styles.Viewstyle}>
          <Image
          style={{width:196,height:190,borderRadius:15}}
          source={require('../assets/T_umrah.jpg')}
          
          />
          <Text style={{fontWeight:"bold",marginTop:5}}>{'->'} 4 star Package</Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Rs 400000 only </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 5 Nights and 6 days </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Hotel With Taxi Services </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 3 Time Meal </Text>

          <TouchableOpacity style={styles.buttonstyle}
          onPress={()=>{navigation.navigate('Registration')}}
          
          >
            <Text style={{marginLeft:60,fontSize:18}}> 
              Buy Now
            </Text>

          </TouchableOpacity>
          </View>
         
  
         
          <View style={styles.Viewstyle}>
          <Image
          style={{width:196,height:190,borderRadius:15}}
          source={require('../assets/T_umrah1.png')}
          
          />
          <Text style={{fontWeight:"bold",marginTop:5}}>{'->'} 5 star Package</Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Rs 500000 only </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 7 Nights and 8 days </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} Hotel With Taxi Services </Text>
          <Text style={{fontWeight:"bold"}}>{'->'} 3 Time Meal </Text>
          <TouchableOpacity style={styles.buttonstyle}
          onPress={()=>{navigation.navigate('Registration')}}
          
          >
            <Text style={{marginLeft:60,fontSize:18}}> 
              Buy Now
            </Text>

          </TouchableOpacity>


          </View>
          
          
          
            
        </View>




    )


}

const styles = StyleSheet.create({

Viewstyle:{
    marginLeft:10,
    borderWidth:1,
    width:197,
    borderRadius:15,
    borderColor:"#dddddd",
    
    
},
buttonstyle:{
    width:195,
    height:30,
    backgroundColor:"#00ced1",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15


}















})
export default Umrahpack;