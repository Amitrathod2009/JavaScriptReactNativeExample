import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Mytdstyle from './Mytdstyle';
const Mytdprac = () => {
    const [val, setVal] = useState('CYGBIT LLP');
    const [color,setColor]=useState(null)
    const renderVal=()=>{
        return(
            <View>
                <Text>{val}</Text>
            </View>
        )
    }
    const renderMybtn=()=>{
        return(
            <View>
                <TouchableOpacity 
                 style={{backgroundColor:"lightblue",paddingVertical:10,marginVertical:10}}
                 onPress={()=>{setVal('CYGBIT.COM'),setColor(color)}}
                 >
                    <Text style={{textAlign:"center"}} >BTN CLICK</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={[Mytdstyle.mainContainer]}>
            {renderVal()}
            {renderMybtn()}
        </View>
    )
}

export default Mytdprac