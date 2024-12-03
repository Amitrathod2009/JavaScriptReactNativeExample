import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginImage from "/GitExample/Assets/Images/LoginImage.png"

const ProfileScreen = () => {
    return (
        <View style={[profileStyle.profileContainer]}>
            <View style={[profileStyle.CircleProfile]}>
                <Image source={LoginImage} style={[profileStyle.imageStyle]} />
            </View>
            <View style={[profileStyle.cardContainer]}>
                <View style={[profileStyle.cardStyle]}>
                    <Text style={[profileStyle.profileText]}>UserName: Jammerz</Text>
                    <Text style={[profileStyle.profileText]}>Email Id:Jammerz123@gmail.com</Text>
                </View>
            </View>
        </View>
    )
}

const profileStyle = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center"
    },
    CircleProfile: {
        height: 150,
        width: 150,
        backgroundColor: "black",
        borderRadius: 100,
        position: "relative"
    },
    imageStyle: {
        position: "absolute",
        resizeMode: "cover",
        top: -10,
        left: 0,
        right: 0,
        bottom: 0
    },
    cardStyle: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    cardContainer: {
        borderColor:"black",
        borderWidth:2,
        marginVertical: 50,
    },
    profileText:{
        color:"black",
        fontSize:22,
    },
})

export default ProfileScreen