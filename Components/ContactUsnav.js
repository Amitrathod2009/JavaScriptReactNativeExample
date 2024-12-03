import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavStyle from './NavStyle'
const ContactUsnav = ({navigation,route}) => 
 {

  // const {contactpram}  = route.params;

    const  handleCotact=(screename)=>{
      alert("You are now ReDirect to About us Page")
      navigation.navigate(screename,)
    }
  return (
    <View style={[NavStyle.mainContainer]}>
       {/* <Text>Pages: {JSON.stringify(contactpram)}</Text> */}
      <Text style={[NavStyle.HeaderText]}>Welcome to Contact Us page</Text>
      <View style={[NavStyle.subContainer]}>
        <Text style={[NavStyle.commonText]}>
          Form Bharvani Jarur Nahi{'\n'}
          Company Name:ABC LLP{'\n'}
          address:Jate Shodhi levu {'\n'}
          contact No: 101010 bus{'\n'}
          webiste :Abc pachi D.com 
        </Text>
      </View>

      <TouchableOpacity
        style={[NavStyle.btn,{marginVertical:20,backgroundColor:"white"}]}
        onPress={()=>handleCotact('About')}
      >
        <Text style={[NavStyle.buttonText]}>About Us</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ContactUsnav