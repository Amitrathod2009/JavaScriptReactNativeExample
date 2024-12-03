import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Navscreenone = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>

            <View style={styles.topView} >
                <Text style={styles.centerTexts}>Discover</Text>
            </View>

            <View style={{ flex: 1, justifyContent: "center" }}>

                <TouchableOpacity style={styles.middleView}
                    onPress={() => {
                        navigation.navigate('ScreenTwo')
                    }
                    }
                >
                    <Text style={styles.centerTexts}>Go To Discover Inside Screen With Tab Shown</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.middleView, { marginTop: 20 }]}
                    onPress={() => {
                        navigation.navigate('ScreenThree')
                    }}
                >
                    <Text style={styles.centerTexts}>Go To Discover Inside Screen With Tab Hidden</Text>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.bottomView} >


                <TouchableOpacity style={[styles.bottomButton, { backgroundColor: "#B6B6B6" }]}><Text style={[styles.buttonText]}>Discover</Text></TouchableOpacity >
                <TouchableOpacity style={[styles.bottomButton]}><Text style={[styles.buttonText]}>Profile</Text></TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('ScreenFour')}
                    style={[styles.bottomButton]}>
                    <Text style={[styles.buttonText]}>Preference</Text>
                </TouchableOpacity>

            </View> */}



        </View>
    )
}
const styles = StyleSheet.create({

    topView: {
        flexDirection: "row",
        height: 64,
        borderColor: "#B6B6B6",
        borderWidth: 1,
        marginTop: 0,
        justifyContent: "center",
        alignItems: "center"

    },

    middleView: {
        height: 64,
        borderColor: "#B6B6B6",
        borderWidth: 1,
        marginHorizontal: 15,
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center"
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
export default Navscreenone