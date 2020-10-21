import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const Logo=()=>
{
    return(
        <View style={styles.container}>
           <Image
           style={{width:120,height:120,}}
           source={require('../images/logo.png')}
           />
          
          
        </View>
    )

}
const styles = StyleSheet.create({

container:{
    flex:1,
   justifyContent:"center",
    alignItems:"center",
    marginTop:100,

},
        })


    
  
export default Logo;