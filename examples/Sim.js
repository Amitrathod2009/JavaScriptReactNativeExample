import { View, Text } from 'react-native'
import React from 'react'

const Sim = () => {
    const numbers = [1, 4, 9, 40, 80, 77, 66, 59, 66, 88, 8,];
    const arrayprime = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const roots = numbers.map((num) => Math.sqrt(num));
    console.log(numbers.fill(150, 1));
    isPrime = (num) => {
        for (let i = 2; num > i; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;

    }
    console.log(arrayprime.filter(isPrime));
    return (
        <View>
            <View>
                <Text> map example sqrt==:{roots}</Text>
                <Text> is prime==:</Text>
            </View>
        </View>
    )
}

export default Sim