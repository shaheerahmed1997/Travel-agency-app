import firebase from 'firebase';
import React from 'react';
import {View,Text,Alert} from 'react-native';
import {
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Drawer } from 'react-native-paper';
import {useNavigation } from '@react-navigation/native';
import Drawerupview from './Drawerupview'


const DrawerContent=(props)=>{
    const navigation = useNavigation();
    
return(
    <View style={{flex:1}}>
            <Drawerupview/>
            <Drawer.Section>
                <DrawerItem label="Profile" onPress={()=>{}}/>
                <DrawerItem label="Your Trip" onPress={()=>{Alert.alert("You havnt made any trip with us")}}/>
                <DrawerItem label="Contact Us" onPress={()=>{navigation.navigate("Contactus")
              props.navigation.closeDrawer()}}/>
            </Drawer.Section>
            
        
        
        <DrawerItem
        icon={()=>(
            <Icon
            name={"power-off"}
            size={20}
            />
        )}
        onPress={()=>{
            firebase.auth().signOut().then(()=>{navigation.replace("Form")})
            .catch(()=>{Alert.alert("Network error")})
            
        }}
        label="Sign out"
        style={{flex:1,}}
        />
    </View>
)
}

export default DrawerContent;