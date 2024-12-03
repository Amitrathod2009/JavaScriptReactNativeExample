import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const Foreachfun = () => {
    const ob=[{
        name:"abc",
        pay:100
    },
    {
        name:"def",
        pay:80
    },
    {
        name:"ok",
        pay:90
    }]
    const [temp,setTemp] = useState(ob); 
   
    useEffect(() => {
        fn()
    },[])

    const fn = () => {
        let mydata = [...ob];
        mydata.forEach((item) =>{
          item.pay = item.pay -10
        })
        setTemp(mydata);
    }

  return (
    <View>
     <Text>{
         temp.map((mdata)=>{
            return(
                <Text>{mdata.pay}</Text>
            )
        })
        }</Text>
        <Text>a</Text>
    </View>
  )
}

export default Foreachfun