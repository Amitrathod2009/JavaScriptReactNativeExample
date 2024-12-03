import { View, Text,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const Multimap = () => {
    const [myno, setNo] = useState([4, 9, 16, 25]);
    const [multipliedNumbers, setMultipliedNumbers] = useState([]);
    const multiplyNumbers = () => {
        const newArr = myno.map((num)=> {
          return num * 10;
        })
        setMultipliedNumbers(newArr);
      }
  return (
    <View>
         {
        multipliedNumbers && multipliedNumbers.map((num,index)=>{
          return(
            <View key={index}>
              <Text style={{ color: "black", fontSize: 25, textAlign: "center", paddingHorizontal: 20, }}>{num*3}</Text>
            </View>
          )
        })
      }
      <Text>Multimap</Text>
      <View>
          <TouchableOpacity style={{ backgroundColor: "black", margin: 10 }} onPress={multiplyNumbers}>
            <Text style={{ color: "white", fontSize: 25, textAlign: "center", paddingHorizontal: 20, }}>multiply data</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: "center", color: "black", marginRight: 2, marginTop: 10 }}>{myno}</Text>
    </View>
  )
}

export default Multimap