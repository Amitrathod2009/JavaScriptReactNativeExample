import { View, Text } from 'react-native'
import React from 'react'

const Switchkase = () => {
    let text;
    switch (new Date().getDay()) {
        case 6:
          text = "Today is Saturday";
          break;
        case 0:
          text = "Today is Sunday";
          break;
        default:
          text = "Looking forward to the Weekend";
      }
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default Switchkase