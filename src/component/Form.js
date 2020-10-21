import firebase from 'firebase';
import React, { Component } from 'react';
import{View,TextInput,StyleSheet,TouchableOpacity,Text,ActivityIndicator,Alert,KeyboardAvoidingView} from 'react-native';
import Logo from '../component/Logo';


class Form extends Component{
    state={
        email:'',
        password:'',
        error:'',
        loading:false,
        isfocusedemail:false,
        isfocusedpass:false,
    }
    whenfocuseemail()
    {
        this.setState({isfocusedemail:true})
        this.setState({isfocusedpass:false})
    }
    whenfocusepass()
    {
        this.setState({isfocusedpass:true})
        this.setState({isfocusedemail:false})
    }
    setfalse()
    {
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false,
            isfocusedemail:false,
            isfocusedpass:false,
        })
    }
    nextscreen(){
            this.props.navigation.replace('Loggedin');
    }
    
    errorauthentication(error){

        Alert.alert(error.message)
        this.setState({loading:false})
    }
    onsuccess()
    {
        this.setState({email:'',password:''})
        this.nextscreen();
        this.setState({loading:false,isSignedin:true})

    }
    onbuttonpress(){
        this.setState({loading:true})
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{this.onsuccess()})
        .catch((error)=>{this.errorauthentication(error)})

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
                <TouchableOpacity style={styles.butonstyle} onPress={()=>this.onbuttonpress()}>
             <Text style={styles.textstyle}>
                 Sign In
             </Text>
         </TouchableOpacity>

            )
        }

    }
   
    

render()
{
return(
    <KeyboardAvoidingView    style={styles.viewstyle}>
        <View style={styles.viewstyle}>       
          <View  style={{alignItems:"center",justifyContent:"center",backgroundColor:'#455a64',marginBottom:30}}>
            <Logo/>
          <Text>
               <Text style={{fontSize:95,color:"black",}}>X</Text>
               <Text style = {{  fontSize:50,color:"black",marginTop:10,fontStyle:"italic",}}>_Travelers</Text>
           </Text>
        <TextInput
                returnKeyType="next"
                keyboardType = "email-address"
                style={[styles.inputstyle ,{borderColor: this.state.isfocusedemail ? '#00ced1' : '#455a64'}]} 
                value={this.state.email}
                onChangeText={(email)=>{this.setState({email})}}
                placeholder="Email ID"
                onSubmitEditing={()=>{this.passwordInput.focus()}}
                blurOnSubmit={false}
                onFocus={()=>{this.whenfocuseemail()}}
         />
         
         <TextInput
                secureTextEntry={true}
                keyboardType="default"
                style={[styles.inputstyle ,{borderColor: this.state.isfocusedpass ? '#00ced1' : '#455a64'}]} 
                value={this.state.password}
                onChangeText={(password)=>{this.setState({password})}}
                secureTextEntry={true}
                ref={(value)=>{this.passwordInput=value}}
                onFocus={()=>{this.whenfocusepass()}}
                placeholder="Password" 
            />
        
        {this.onloading()}
        
        
         
         <Text style={{marginTop:10,fontSize:15,color:"white",fontStyle:"italic",textDecorationLine:"underline"}}>
             Don't have a account?Then
         </Text>
         <TouchableOpacity style={styles.signupstyle} onPress={()=>{this.props.navigation.navigate('Signup')
             this.setfalse()
             }}> 
                    <Text style={styles.textstyle} >
                        Sign Up
                    </Text>
         </TouchableOpacity>
         </View>
         
             
       
    </View>
    </KeyboardAvoidingView>
 
    
   
)

}
}
const styles = StyleSheet.create({
    viewstyle:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#455a64',


    },

inputstyle:{
    fontSize:18,
    
   width:300,
   backgroundColor:"white",
   borderRadius:25,
   marginTop:20,
   paddingHorizontal:20,
   borderWidth:2,
   


},
textstyle:{
fontSize:25,
color:"black",
textAlign:"center"

},
butonstyle:{
marginTop:15,
width:250,
backgroundColor:"#00ced1",
borderRadius:10,
},
signupstyle:{

    marginTop:15,
    width:250,
    backgroundColor:"white",
    borderRadius:10,
    borderColor:"#00ced1",
    borderWidth:3,

},
errortext:{
    color:"black",
    fontSize:20,
},

})
export default Form;