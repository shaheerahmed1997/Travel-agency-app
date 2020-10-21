import React, {Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';


class Drawerupview extends React.Component{
    state={
        name:'',
    }
    componentDidMount()
    {
            firebase.auth().onAuthStateChanged(user=>{
                if(user)
                {
                    this.setState({name:user.email})
                }
            })

    }

render()
{
    return(


        <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"#00ced1"}}>
    <Icon
        style={{marginTop:20}}
            name={"user"}
            size={130}
            
            
            />
            <Text style={{fontSize:20,marginBottom:20}}>{this.state.name}</Text>
            </View>
    )



}



}
export default Drawerupview;