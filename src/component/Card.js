import React from 'react';
import {View} from 'react-native';


const Card=({children})=>
{
    
    const { containerstyle}=styles
    return(

        <View style={containerstyle}>
            {children}

        </View>
    );



}
const styles=
{
    containerstyle:{
        
        borderWidth:1,
        borderRadius:15,
        borderColor:'#00bfff',
        backgroundColor:'#00bfff',
       // borderBottomWidth:5,
        elevation:25,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
    },
}
export default Card;