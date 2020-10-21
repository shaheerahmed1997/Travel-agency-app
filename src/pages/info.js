import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView
} from 'react-native';
import Logo from '../component/Logo'

const info=()=>{
    return(
        
        <View style={{flex:1,justifyContent:"flex-start",alignItems:"center"}}>
            <View style={{ justifyContent:"flex-start",alignItems:"center",backgroundColor:"#455a64",width:500,marginBottom:40}}>
            <Logo/>
            <Text>
               <Text style={{fontSize:95,color:"black",}}>X</Text>
               <Text style = {{  fontSize:50,color:"black",marginTop:10,fontStyle:"italic",}}>_Travelers</Text>
           </Text>
           </View>
           <View style={{ flex:1,alignItems:"center",justifyContent:"flex-start", marginHorizontal:20,}}>
               <Text style={{alignItems:"center",justifyContent:"center" ,fontSize:18}}> 
               X_travellers is an IATA-certified Travel Agency and is regarded as a veteran in the industry with over 30 years of servicing the travel needs of clients all across Pakistan. Bestways has won more than 50 awards from various airlines and travel organizations for its amazing service.

               </Text>
               <Text style={{alignItems:"center",justifyContent:"center" ,fontSize:18 }}> 
                  { " \n X_travellers is licensed with the prestigious IATA. This license helps us provide our clients with the most economical rates possible in the industry"}
                   </Text>
           </View>
        
        </View>
        


    )





}

export default info;
