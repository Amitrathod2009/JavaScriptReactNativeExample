import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Navscreenseven = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={[styles.topView]}>
                <TouchableOpacity 
                  onPress={() => {
                    navigation.goBack()
                 }}
              ><Text style={[styles.centerTexts,]}>CLOSE</Text></TouchableOpacity>
                <TouchableOpacity><Text style={[styles.centerTexts, { marginHorizontal: 50 }]}>Terms & Conditions</Text></TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 2, paddingVertical: 15 }}>
                <Text style={{ color: "black", marginTop: 5, fontSize: 16, textAlign: "center", lineHeight: 30 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum
                </Text>
            </View>
            {/* <View style={{ flex: 1 }} /> */}





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
export default Navscreenseven