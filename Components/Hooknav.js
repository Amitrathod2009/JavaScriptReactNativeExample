import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavStyle from './NavStyle'
import { useNavigation } from '@react-navigation/native'
const Hooknav = ({navigation}) => {
  const navigationHook=useNavigation();
  console.log("navigation Hook ====>",navigationHook)
  
  return (
    <View style={[NavStyle.mainContainer]}>
      <Text style={[NavStyle.HeaderText]}>Welcome to Hook Navigation Page</Text>
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
        onPress={()=>navigationHook.navigate('Home')}
      >
        <Text style={[NavStyle.buttonText]}>Home</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Hooknav