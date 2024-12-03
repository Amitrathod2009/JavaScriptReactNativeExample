import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Navscreenthree = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={[styles.topView]}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}><Text style={[styles.centerTexts,]}>BACK</Text></TouchableOpacity>
                <TouchableOpacity><Text style={[styles.centerTexts, { marginHorizontal: 50 }]}>Discover Inside Tab Hidden</Text></TouchableOpacity>
            </View>

            <View style={{ flex: 1 }} />





        </View>
    )
}
const styles = StyleSheet.create({

    topView: {
        flexDirection: "row",
        padding: 18,
        borderColor: "#B6B6B6",
        borderWidth: 1,

    },

    centerTexts: {
        color: "black",
        fontSize: 16,
    },

})
export default Navscreenthree