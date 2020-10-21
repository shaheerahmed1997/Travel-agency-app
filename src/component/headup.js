import React from 'react';
import {
  
  StyleSheet,
  View,
  Text, 
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Headup=()=>{
  const navigation = useNavigation();
  
    return(
        
       <View  style={styles.sectionTitle}>
       <TouchableOpacity
            onPress={()=>{navigation.openDrawer();}}
            >
            <Icon
        name={"bars"}
        size={30}
        color={"#00ced1"}
        
        />
        </TouchableOpacity>

            <Text style={{marginBottom:7}}>
                <Text style = {{fontSize:40}}>
                  X
                </Text>
                <Text style = {{fontSize:25}}>
                  _Travellers
                </Text>
            </Text>
            <TouchableOpacity 
         onPress={()=>{navigation.navigate("info")}}
         >

         <Image
           style={{width:45,height:45,marginBottom:10,marginRight:0}}
           source={require('../images/logo.png')}
           />
         </TouchableOpacity>
            
        </View>
       
    )




}

const styles = StyleSheet.create({
  
  sectionTitle: {
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:"#455a64",
    height:55,
    borderWidth:1,
    
    
    borderColor:"#455a64",
    paddingTop:15,
    elevation:25,
    
   
    
  },
  
  
 
});
export default Headup;