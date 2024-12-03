import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import NavStyle from './NavStyle'
import Homeimg from '../Assets/Images/home.png'
const Homenav = ({navigation}) => {

  return (
    <View style={[NavStyle.mainContainer]}>
      <Text style={[NavStyle.HeaderText]}>Welcome to Home</Text>
      <Image source={Homeimg} style={{height:"25%",width:"100%",resizeMode:"center"}} />
      <View style={[NavStyle.subContainer]}>
        <Text style={[NavStyle.commonText,{textAlign:"justify"}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        .</Text>
      </View>
{/* 
       <View style={{flexDirection:"row",justifyContent:"center"}}>
       <TouchableOpacity
        style={[NavStyle.btn]}
        onPress={()=>navigation.navigate("About",{otherParam: 'Home >About Us',})}
      >
        <Text style={[NavStyle.buttonText]}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[NavStyle.btn,{backgroundColor:"white"}]}
        onPress={()=>navigation.navigate("Contact")}
      >
        <Text style={[NavStyle.buttonText,{color:"lightpink"}]}>Contact us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[NavStyle.btn,{backgroundColor:"grey"}]}
        onPress={()=>navigation.navigate("Hook")}
      >
        <Text style={[NavStyle.buttonText,{color:"white"}]}>Hook page</Text>
      </TouchableOpacity>
       </View> */}
     
    </View>
  )
}

export default Homenav