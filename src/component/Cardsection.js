import React from 'react';
import {View,StyleSheet} from 'react-native';
const Cardsection=({children})=>{
    
    const {containerStyle} = styles;
    return(
        <View style={containerStyle}>
                      {children}
              </View>
     

    )


}


const styles=
{
    containerStyle:{
        borderRadius:5,
    borderBottomWidth: 1,
    padding: 5 ,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'column',
    borderColor:'#ddd',
    position:'relative'
    },
    
   
}

export default Cardsection;