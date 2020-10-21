import React from 'react';
import{View,StyleSheet,} from 'react-native';
import Logo from '../component/Logo';
import Form from '../component/Form';

const Login=({navigation})=>
{
    return(
        
        <View style={styles.container}>
            
            <Logo/>
            <Form navigation={navigation}/>
            
        </View>
        
       
    )


}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#455a64',
    },
})
export default Login;
