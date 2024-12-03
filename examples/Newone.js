import { View, Text } from 'react-native'
import React from 'react'

const Newone = () => {
    let x = 20;
    let y = 10;
    let c = x == y;
    let a = 15;
    let b = a;
  
   
    console.log("obj data==>",objdata)
    console.log("B==>", b == x)
    console.log("C==>", c)
    greatherThan = () => {
        if (x == y) {
            console.log("its true all")
        }
        else {
            console.log("false all")
        }
    }
    
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    
    return (
        <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center" }}>
            {/* <View>
                   <Text style={{ color: "red", textAlign: "center", fontSize: 20 }}>JavaScript Math Constants</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20 }}>math pi=={Math.PI}</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, marginTop: 2 }}>Euler's number=={Math.E}</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, marginTop: 2 }}>square's number=={Math.SQRT2}</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, marginTop: 2 }}>square 1/5 's number=={Math.SQRT1_2}</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, marginTop: 2 }}>Round number of 2.6=={Math.round(2.6)}</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, marginTop: 2 }}>Round number of 2.4=={Math.round(2.4)}</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, marginTop: 2 }}>square root of  64=={Math.sqrt(64)}</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, marginTop: 2 }}>minimum=={Math.min(0, 150, 30, 20, -5, 200)}</Text>
            <Text style={{ color: "black", textAlign: "center", fontSize: 20, marginTop: 2 }}>Random Number=={Math.random()}</Text>
                   </View> */}
            <View>
                <Text>{greatherThan()}</Text>
            </View>
            <View style={{ backgroundColor: "black", marginHorizontal: 20, padding: 5 }}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>Today is  {day}</Text>
            </View>
        </View>
    )
}

export default Newone