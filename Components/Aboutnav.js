import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavStyle from './NavStyle'
const Aboutnav = ({navigation,route}) => {
  // const {otherParam}  = route.params;
  
  return (
    <View style={[NavStyle.mainContainer]}>
       {/* <Text>Pages: {JSON.stringify(otherParam)}</Text> */}
      <Text style={[NavStyle.HeaderText]}>Welcome to About us page</Text>
      <View style={[NavStyle.subContainer]}>
        <Text style={[NavStyle.commonText,{textAlign:"justify"}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishingsoftware like Aldus PageMaker including
          versions of Lorem Ipsum.</Text>
      </View>

      <TouchableOpacity
        style={[NavStyle.btn]}
        onPress={()=>navigation.navigate('Contact',{contactpram:"About us >Contact us"})}
      >
        <Text style={[NavStyle.buttonText]}>Contact Us</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Aboutnav