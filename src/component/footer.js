import React from 'react';
import {
  
  StyleSheet,
 
  View,
  Text,
  
} from 'react-native';


const Footer=()=>{
  
    return(
        
       <View  style={styles.sectionTitle}>
            <Text style={styles.tectstyle}>
                footer
            </Text>
        </View>
       
    )




}

const styles = StyleSheet.create({
  
  sectionTitle: {
    alignItems:'center',
   // justifyContent:'center',
    backgroundColor:"#696969",
    height:130,
    borderWidth:2,
    
    borderColor:"grey",
    paddingTop:15,
    elevation:25,
   
    
  },
  
  tectstyle:{

    fontSize:30,

  }
 
});
export default Footer;