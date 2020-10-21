import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity, Alert,ActivityIndicator} from 'react-native';
import firebase from 'firebase';
class Inputteststyle1 extends Component
{
state={
    countryname:'',
    person:'',
    days:'',
    tourtype:'',
    Phoneno:'',
    isfocusedcountry1:false,
    isfocusedstay:false,
    isfocusedmember:false,
    isfocusedtype:false,
    isfocusedphone:false,
    loading:false
}
success()
{
  this.setState({loading:false})
  Alert.alert("Your Form Has been Submitted You Will be informed soon")
  this.setState({countryname:'',person:'',days:'',tourtype:'',Phoneno:''})


}
buttonpressed()
{
  this.setState({loading:true})
  firebase.database().ref("designtour").push().set({
    countryname:this.state.countryname,
    time:Date.now(),
    person:this.state.person,
    days:this.state.days,
    tourtype:this.state.tourtype,

}).then(()=>{this.success()})
.catch(()=>{Alert.alert("Something went wrong try again")
this.setState({loading:false})
});





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
              <TouchableOpacity style={styles.buttonstyle} onPress={()=>{this.buttonpressed()}}>

              <Text style={{fontSize:22,fontWeight:"bold",marginLeft:60}}>
                Submit
              </Text>
              </TouchableOpacity>

        )
    }

}
render()
{
    return(
      <View>
        <View style={{flex:1,flexDirection:"row"}}>
        <TextInput
        returnKeyType="next"
        value={this.state.countryname}
        onChangeText={(value)=>{this.setState({countryname:value,})}}
        style={[styles.inputstyle,{marginLeft:15},{borderBottomColor: this.state.isfocusedcountry1 ? "#00ced1" : "black"}]} 
        placeholder="Country Name"
        onSubmitEditing={()=>{this.inputperson.focus()}}
        blurOnSubmit={false}
        onFocus={()=>{this.setState({isfocusedcountry1:true})}}
        onEndEditing={()=>{this.setState({isfocusedcountry1:false})}}

         />
         <TextInput
        returnKeyType="next"
        keyboardType="number-pad"
        value={this.state.person}
        onChangeText={(value)=>{this.setState({person:value,})}}
        style={[styles.inputstyle,{marginLeft:20},{borderBottomColor: this.state.isfocusedmember ? "#00ced1" : "black"}]} 
        placeholder="No of Person"
        onSubmitEditing={()=>{this.inputdays.focus()}}
      ref={(value)=>{this.inputperson = value}}
        blurOnSubmit={false}
        onFocus={()=>{this.setState({isfocusedmember:true})}}
        onEndEditing={()=>{this.setState({isfocusedmember:false})}}
         />

        </View>
        <View style={{flex:1,flexDirection:"row"}}>
        <TextInput
        keyboardType="number-pad"
        returnKeyType="next"
        style={[styles.inputstyle,{marginLeft:15,marginTop:10},{borderBottomColor: this.state.isfocusedstay ? "#00ced1" : "black"}]} 
        placeholder="No of days"
        value={this.state.days}
        onChangeText={(value)=>{this.setState({days:value,})}}
        onSubmitEditing={()=>{this.inputtype.focus()}}
      ref={(value)=>{this.inputdays = value}}
        blurOnSubmit={false}
        onFocus={()=>{this.setState({isfocusedstay:true})}}
        onEndEditing={()=>{this.setState({isfocusedstay:false})}}
         />

         <TextInput
        returnKeyType="next"
        style={[styles.inputstyle,{marginLeft:20,marginTop:10},{borderBottomColor: this.state.isfocusedtype ? "#00ced1" : "black"}]} 
        placeholder="Type Of Tour"
        value={this.state.tourtype}
        onSubmitEditing={()=>{this.inputphone.focus()}}
        blurOnSubmit={false}
        onChangeText={(value)=>{this.setState({tourtype:value,})}}
      ref={(value)=>{this.inputtype = value}}
        onFocus={()=>{this.setState({isfocusedtype:true})}}
        onEndEditing={()=>{this.setState({isfocusedtype:false})}}
         />

         </View>
         <TextInput
        returnKeyType="done"
        keyboardType="number-pad"
        style={[styles.inputstyle,{marginLeft:20,marginTop:10,width:300},{borderBottomColor: this.state.isfocusedphone ? "#00ced1" : "black"}]} 
        placeholder="Enter Your Phone No"
        value={this.state.Phoneno}
        onChangeText={(value)=>{this.setState({Phoneno:value,})}}
      ref={(value)=>{this.inputphone = value}}
        onFocus={()=>{this.setState({isfocusedphone:true})}}
        onEndEditing={()=>{this.setState({isfocusedphone:false})}}
         />
         

         {this.onloading()}
        </View>



    )
}

}

const styles = StyleSheet.create({

    inputstyle:{
    
        width:150,
        backgroundColor:"white",
        marginTop:0,
        borderBottomWidth:1,
        fontSize:18,
     
     },
     buttonstyle:{
      backgroundColor:"#00ced1",
      height:30,
      width:200,
      marginLeft:80,
      marginTop:15,
      borderRadius:20,
     }

})

export default Inputteststyle1;