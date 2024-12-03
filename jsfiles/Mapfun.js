import { View, Text } from 'react-native'
import React from 'react'

const Mapfun = () => {
    const schooldata=[{
        name:"amit",
        std:8,
        schoolname:"ASB school"
    },
    {
        name:"jay",
        std:10,
        schoolname:"ASB school"
    },
    {
        name:"hitendra",
        std:4,
        schoolname:"ok school"
    },
    {
        name:"rojy",
        std:12,
        schoolname:"ps school"
    }]
  return (
    <View  style={{justifyContent:"center",flex:1}}>
      {/* {
        schooldata.map((sdata)=>{
            return(
               <Text>name is: {sdata.name} standard is:  {sdata.std} schoolname is: {sdata.schoolname}</Text>
            )
        })
        
} */}

<View>
<Text style={{fontSize:40,textAlign:"center",color:"red"}}>a</Text>
</View>
    </View>
  )
}

export default Mapfun