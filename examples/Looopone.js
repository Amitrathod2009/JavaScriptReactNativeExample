import { View, Text } from 'react-native'
import React from 'react'

const Looopone = () => {
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    const person = { fname: "John", lname: "Doe", age: 25 };
    let i, len, text;
    for (i = 0, len = cars.length, text = ""; i < len; i++) {
        text += cars[i] + "<br>";
    }
    let txt = "";
    for (let x in person) {
        txt += person[x] + " ";
    }
    return (
        <View>
            <Text>{text}</Text>
            <Text>{txt}</Text>
        </View>
    )
}

export default Looopone