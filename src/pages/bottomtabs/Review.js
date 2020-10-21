import React from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import Logo from '../../component/Logo';
import Icon from 'react-native-vector-icons/FontAwesome';
const Review=()=>{
return(
    <ScrollView>
    <View style={{flex:1,}}>
        <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
            <Logo/>
            <Text style={{fontSize:25,fontWeight:"bold",marginLeft:12}}>Whats Other think about us !!</Text>
            

        </View>

        <View style={styles.viewstyle}>
        <Icon
        style={{marginTop:0}}
            name={"user"}
            size={100}
            
            
            />
            <Text>
                    <Text style = {{fontWeight:"bold",fontSize:20}} >
                        Shaheer Ahmed
                    </Text>
                    <Text style={{fontSize:14}}>
                        {"\n\n  Shaheer Ahmed give you 5 star to you\n  It is great enjoyment With you give "}

                    </Text>

            </Text>

            
            </View> 
            <View style={styles.viewstyle}>
        <Icon
        style={{marginTop:0}}
            name={"user"}
            size={100}
            
            
            />
            <Text>
                    <Text style = {{fontWeight:"bold",fontSize:20}} >
                        Waqas Javad
                    </Text>
                    <Text style={{fontSize:14}}>
                        {"\n\n  Waqas Javaas give you 5 star to you\n  The best Pakistan Tour I had "}

                    </Text>

            </Text>

            
            </View>         
    </View>
    </ScrollView>

)


}
const styles = StyleSheet.create({

viewstyle:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"#00ced1",
    marginTop:20,
    marginHorizontal:20,
    width:320,
    height:100,
    borderRadius:10,
    elevation:10,
},

})

export default Review;
