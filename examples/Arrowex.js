import { View, Text } from 'react-native'
import React from 'react'

const Arrowex = () => {
    let a =11 ;
    let hello=(name,surmame)=> `my name is :${name} - ${surmame}`
        console.log(hello("amit","Rathod"));
        console.log(typeof hello);

  return (
    <View>
      <Text>a === {a}</Text>
    </View>
  )
}

export default Arrowex