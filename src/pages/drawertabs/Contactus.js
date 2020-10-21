import React from 'react';
import {View,Text} from 'react-native';
import Logo from '../../component/Logo';

const Contactus=()=>
{
    
    return(
                <View style={{flex:1,alignContent:"flex-start",backgroundColor:"#455a64"}}>
                    
                   <Text style={{fontSize:50,marginTop:30,color:"#00ced1",marginLeft:10}}>
                       Email:
                   </Text>
                   <Text style={{marginLeft:30,fontSize:20}}>
                       Xtravellers_123@gmail.com
                   </Text>
                   <Text style={{fontSize:50,marginTop:30,color:"#00ced1",marginLeft:10}}>
                       Contact No:
                   </Text>
                   <Text style={{marginLeft:30,fontSize:20}}>
                      03344678542
                   </Text>
                   <Text style={{fontSize:50,marginTop:30,color:"#00ced1",marginLeft:10}}>
                       Address:
                   </Text>
                   <Text style={{marginLeft:30,fontSize:20}}>
                   Nazim Street, Block A North Nazimabad Town, Karachi, Karachi City, Sindh 74700
                   </Text>


                </View>

    
    )



};

export default Contactus;