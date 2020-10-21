import firebase from 'firebase';
import React, { Component } from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity,Alert,KeyboardAvoidingView, KeyboardAvoidingViewComponent} from 'react-native';
import Logo from '../component/Logo';





class Registration extends Component{
    state={
        name:'',
        fathername:'',
        email:'',
        nic:'',
        contact:'',
        Address:'',
        isfocusedname:false,
        isfocusedfname:false,
        isfocusedemail:false,
        isfocusednic:false,
        isfocusedcontact:false,
        isfocusedaddress:false,
    }
    success()
    {
        Alert.alert("Your request is submitted you will be informed with in 3 days");
        this.setState({name:'',email:'',fathername:'',nic:'',contact:'',Address:''})

    }
    fail()
    {
        Alert.alert("Something went wrong try again");

    }
    calldatabase()
    {
        firebase.database().ref("userdata").push().set({
            name:this.state.name,
            time:Date.now(),
            fathername:this.state.fathername,
            email:this.state.email,
            nic:this.state.nic,
            contact:this.state.contact,
            address:this.state.Address,

        }).then(()=>{this.success()})
        .catch(()=>{this.fail()});
    }

render()
{
    return(
      <KeyboardAvoidingView>
        <ScrollView>
        <View style={{flex:1,alignItems:"center",backgroundColor:"white"}}>
            <Logo/>
            <TextInput
        returnKeyType="next"
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusedname ? "#00ced1" : "black"}]} 
        placeholder="Enter Your Name"
        onSubmitEditing={()=>{this.inputfname.focus()}}
          value={this.state.name} 
       onChangeText={(value)=>{this.setState({fathername:value,})}}
        blurOnSubmit={false}
        onFocus={()=>{this.setState({isfocusedname:true})}}
        onEndEditing={()=>{this.setState({isfocusedname:false})}}

         />
         <TextInput
        returnKeyType="next"
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusedfname ? "#00ced1" : "black"}]} 
        placeholder="Enter Your Father Name"
        onSubmitEditing={()=>{this.inputemail.focus()}}
          value={this.state.fathername} 
       onChangeText={(value)=>{this.setState({name:value,})}}
        blurOnSubmit={false}
        ref={(value)=>{this.inputfname = value}}
        onFocus={()=>{this.setState({isfocusedfname:true})}}
        onEndEditing={()=>{this.setState({isfocusedfname:false})}}

         />

         <TextInput
        returnKeyType="next"
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusedemail ? "#00ced1" : "black"}]} 
        placeholder="Enter Your Email"
        onSubmitEditing={()=>{this.inputnic.focus()}}
          value={this.state.email} 
       onChangeText={(value)=>{this.setState({email:value,})}}
        blurOnSubmit={false}
        ref={(value)=>{this.inputemail = value}}
        onFocus={()=>{this.setState({isfocusedemail:true})}}
        onEndEditing={()=>{this.setState({isfocusedemail:false})}}
         />
         
         <TextInput
        returnKeyType="next"
        keyboardType="number-pad"
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusednic ? "#00ced1" : "black"}]} 
        placeholder="Enter Your nic"
        onSubmitEditing={()=>{this.inputcontact.focus()}}
          value={this.state.nic} 
       onChangeText={(value)=>{this.setState({nic:value,})}}
        blurOnSubmit={false}
        ref={(value)=>{this.inputnic = value}}
        onFocus={()=>{this.setState({isfocusednic:true})}}
        onEndEditing={()=>{this.setState({isfocusednic:false})}}
         />
         <TextInput
        returnKeyType="next"
        keyboardType="number-pad"
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusedcontact ? "#00ced1" : "black"}]} 
        placeholder="Enter Your Contact No"
        onSubmitEditing={()=>{this.inputaddress.focus()}}
          value={this.state.contact} 
       onChangeText={(value)=>{this.setState({contact:value,})}}
        blurOnSubmit={false}
        ref={(value)=>{this.inputcontact = value}}
        onFocus={()=>{this.setState({isfocusedcontact:true})}}
        onEndEditing={()=>{this.setState({isfocusedcontact:false})}}
         />
         <TextInput
        returnKeyType="done"
        style={[styles.inputstyle,{borderBottomColor: this.state.isfocusedaddress ? "#00ced1" : "black"}]} 
        placeholder="Enter Your Address"
          value={this.state.Address} 
       onChangeText={(value)=>{this.setState({Address:value,})}}
        ref={(value)=>{this.inputaddress = value}}
        onFocus={()=>{this.setState({isfocusedaddress:true})}}
        onEndEditing={()=>{this.setState({isfocusedaddress:false})}}
         />
         <TouchableOpacity style={styles.butonstyle} onPress={()=>{this.calldatabase()}}>
             <Text style={styles.textstyle}>
                 Submit Form
             </Text> 
             </TouchableOpacity> 
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

}
const styles=StyleSheet.create({

  inputstyle:{
    
    width:300,
    backgroundColor:"white",

    marginTop:15,
    paddingHorizontal:16,
    borderBottomWidth:1,
    fontSize:18,
    
 
 },
     butonstyle:{
        marginTop:15,
        marginBottom:15,
    width:200,
    backgroundColor:"#00ced1",
    borderRadius:10,
     },
     textstyle:{
        fontSize:30,
        color:"black",
        textAlign:"center"
        
        },






})
export default Registration;