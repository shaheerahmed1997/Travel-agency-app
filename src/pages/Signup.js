import firebase from 'firebase';
import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView,ActivityIndicator} from 'react-native';





class Signup extends Component{
    state={
        name:'',
        email:'',
        password:'',
        isfocusedname:false,
        isfocusedemail:false,
        isfocusedpass:false,
        loading:false
    }
    
    success()
    {
        firebase.database().ref("signupdata").push().set({
            name:this.state.name,
            time:Date.now(),
            email:this.state.email,
        })
        this.props.navigation.replace("Loggedin")
    }
    failed(error)
    {
        Alert.alert(error.message)
        this.setState({email:'',password:'',name:''})
        this.setState({loading:false})
    }
    registration()
    {
        this.setState({loading:true})
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{this.success()})
        .catch((error)=>{this.failed(error)})
    }
    onloading()
    {
        if(this.state.loading)
        {
            return(
                <View style={{marginTop:5}}>
               <ActivityIndicator size="large"/>
                </View>
            )
        }
        else{
            return(
                <TouchableOpacity style={styles.butonstyle} onPress={()=>{this.registration()}}>
             <Text style={styles.textstyle}>
                 Submit Form
             </Text> 
             </TouchableOpacity>
            )
        }

    }
render(){
return (
<KeyboardAvoidingView    style={styles.container}>
    <View style={styles.container}>
    <Text style={{fontSize:18,fontWeight:"bold",color:"#00ced1"}}>Sign up with E-mail</Text>
        <View style={{alignItems:"center",justifyContent:"center",marginTop:0,}}>
    
        <TextInput
        returnKeyType="next"
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusedname ? "#00ced1" : "black"}]} 
        placeholder="Enter Your Full Name"
        onSubmitEditing={()=>{this.inputemail.focus()}}
          value={this.state.name} 
        onChangeText={(value)=>{this.setState({name:value,})}}
        blurOnSubmit={false}
        onFocus={()=>{this.setState({isfocusedname:true})}}
        onEndEditing={()=>{this.setState({isfocusedname:false})}}

         />


         <TextInput
         keyboardType="email-address"
         returnKeyType="next"
        
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusedemail ? "#00ced1" : "black"}]} 
        value={this.state.email}
        onSubmitEditing={()=>{this.inputpass.focus()}}
          ref={(value)=>{this.inputemail = value}}
        onChangeText={(email)=>{this.setState({email})}}
        blurOnSubmit={false}
         placeholder="Enter Your Email "
         onFocus={()=>{this.setState({isfocusedemail:true})}}
        onEndEditing={()=>{this.setState({isfocusedemail:false})}} 
         />


         <TextInput
         returnKeyType="done"
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusedpass ? "#00ced1" : "black"}]} 
        value={this.state.password}
        ref={(value)=>{this.inputpass = value}}
        onChangeText={(password)=>{this.setState({password})}}
         placeholder="Enter Your Password" secureTextEntry={true}
         onFocus={()=>{this.setState({isfocusedpass:true})}}
        onEndEditing={()=>{this.setState({isfocusedpass:false})}}
         />

        {this.onloading()}
            </View>  
           
   
            
              
    </View>
    </KeyboardAvoidingView>
)
}
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',   
        justifyContent:"center", 
    },
    inputstyle:{
    
        width:300,
        backgroundColor:"white",

        marginTop:15,
        paddingHorizontal:16,
        borderBottomWidth:2,
        fontSize:18,
     
     },
     butonstyle:{
         alignItems:"center",
         justifyContent:"center",
        marginTop:15,
       marginBottom:15,
        
    width:200,
    backgroundColor:"#455a64",
    borderRadius:10,
    height:35
     },
     textstyle:{
        fontSize:25,
        color:"#00ced1",
        textAlign:"center"
        
        },
})
export default Signup;