import React,{Component} from 'react';
import {Text,ScrollView, View,StyleSheet} from 'react-native';
import Umrahpack from './Umrahpack';
import Ziaratpack from './Ziarat';
import Pakistan from './Pakistan';
class Packdetail extends Component
{
    
    render()
    {
    return(
      <ScrollView>
      <View style={{flex:1,marginBottom:65,}}>
        <Text style={{fontSize:60,marginLeft:10}}>Packages</Text>
        <Text style={styles.textstyle}>Hajj & Umrah Packages</Text>
        
        <ScrollView horizontal={true}>
        <Umrahpack/>
      </ScrollView>
      <Text style={styles.textstyle}>Ziarat Packages</Text>
      <Ziaratpack/>
      <Text style={styles.textstyle}>Pakistan Tour</Text>
      <Pakistan/>

     
      </View>
      </ScrollView>
        
    )
    }
        
}
const styles = StyleSheet.create({
textstyle:{
  fontSize:30,
  marginTop:10,
  color:"#00ced1",
  fontWeight:"bold",
  marginLeft:10

},



})


export default Packdetail;