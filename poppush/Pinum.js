import { View, Text } from 'react-native'
import React from 'react'

const Pinum = () => {
  return (
    <View>
      <Text style={{color:"red",fontSize:25}}>{"pi no==>"+Math.PI}</Text>
    </View>
  )
}

export default Pinum