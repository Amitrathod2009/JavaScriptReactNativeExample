import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Navscreenfive = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={[styles.topView]}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}><Text style={[styles.centerTexts,]}>BACK</Text></TouchableOpacity>
                <TouchableOpacity><Text style={[styles.centerTexts, { marginHorizontal: 50 }]}>Preference Inside Tab Shown</Text></TouchableOpacity>
            </View>

            <View style={{ flex: 1 }} />

            {/* <View style={styles.bottomView} >
                <TouchableOpacity style={[styles.bottomButton,]}><Text style={[styles.buttonText]}>Discover</Text></TouchableOpacity >
                <TouchableOpacity style={[styles.bottomButton]}><Text style={[styles.buttonText]}>Profile</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.bottomButton, { backgroundColor: "#B6B6B6" }]}><Text style={[styles.buttonText]}>Preference</Text></TouchableOpacity>
            </View> */}



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


    bottomView: {
        flexDirection: "row",
    },

    centerTexts: {
        color: "black",
        fontSize: 16,
    },
    bottomButton: {
        flex: 1,
        padding: 18,
        borderWidth: 1,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "black",
        fontSize: 16
    },
})
export default Navscreenfive