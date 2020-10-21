import React from 'react';
import {View,Text,ScrollView,KeyboardAvoidingView,StyleSheet,} from 'react-native';
import Logo from '../../component/Logo';
import Inputtextstyle1 from '../../component/Inputtextstyle1';


const Designtour=()=>{
return(
   
    <ScrollView>
    <KeyboardAvoidingView behavior="padding">
    <View style={{flex:1,justifyContent:"center",flexDirection:"column"}}>
        <View style={{ flex:1,backgroundColor:"#455a64",marginBottom:10}}>
            <Logo/>
            <Text style={{fontSize:33,fontWeight:"bold",marginHorizontal:10 ,color:"#00ced1"}}>
                Design Your Dream Tour
            </Text>
        </View>
        <View style={{flex:1,}}>
            <Text style={{fontSize:30}}>Enter Your Information</Text>
            <Inputtextstyle1/>
            
            
            </View>        
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
    

)


}
const styles = StyleSheet.create({

    inputstyle:{
    
        width:300,
        backgroundColor:"white",

        marginTop:15,
        paddingHorizontal:16,
        borderBottomWidth:2,
        fontSize:18,
     
     },

})
export default Designtour;
