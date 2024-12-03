import { View, Text } from 'react-native'
import React from 'react'

const Forinllop = () => {
    const objdata=[
        {name:"abc",subject:"hindi",rollo:20},
        {name:"edf",subject:"gujrati",rollo:10},
        {name:"ghk",subject:"english",rollo:50},
    ]
    for(let key in objdata){
        console.log("obj data======>",key)
        console.log("obj data======>",objdata[key])
    }
  return (
    <View>
      <Text>for in loop</Text>
    </View>
  )
}

export default Forinllop