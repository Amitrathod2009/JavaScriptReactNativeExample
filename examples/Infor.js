import { View, Text } from 'react-native'
import React from 'react'

const Infor = () => {
    const abc=["data","rata","ata","bata"]
    // for(const nkey of abc){
    //   console.log("key here==>",nkey)
     
    // }
    for(const nkey in abc){
        console.log("key here==>",nkey)
        console.log("abc data==>",abc[nkey])
      }
  return (
    <View>
      <Text>Infor</Text>
    </View>
  )
}

export default Infor