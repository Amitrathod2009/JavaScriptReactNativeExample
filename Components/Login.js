import { View, Text ,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
    const [email, onChangeEmail] = React.useState(null);
    const [pass, onChangePass] = React.useState(null);
    return (
       <View style={{ flex: 1, backgroundColor: "white" }}>
          <View style={styles.circleProfile} />
          <View style={[styles.emailpassConatiner]}>
             <View>
                <TextInput
                   style={styles.input}
                   onChangeText={onChangeEmail}
                   value={email}
                   placeholder="Enter Email id"
                   maxLength={8}
 
                />
             </View>
             <View>
                <TextInput
                   style={styles.input}
                   onChangeText={onChangePass}
                   value={pass}
                   placeholder="Enter Password"
                   secureTextEntry={true}
                   maxLength={8}
 
                />
             </View>
 
             <TouchableOpacity
                onPress={() => {
                   navigation.navigate('Term')
                }}>
                <View style={{ flexDirection: "row" }}>
                   <View style={styles.termConditionbox} />
                   <Text style={{ marginTop: 30, color: "black" }}>Agree to Terms & Conditions</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {
                navigation.navigate('Tabs',{
                     email:'123',
                     pass:'aaa'
                })
             }}>
                <View style={styles.loginButton} >
                   <Text style={{ color: "black", fontSize: 16 }}>Login</Text>
                </View>
             </TouchableOpacity>
          </View>
       </View>
    )
}

export default Login
const styles = StyleSheet.create({
    input: {
       height: 60,
       margin: 12,
       borderColor: "black",
       borderWidth: 1,
       opacity: 0.5,
       marginHorizontal: 40,
       marginTop: 20,
       color: "black",
       fontWeight: "700"
    },
    circleProfile: {
       marginHorizontal: 70,
       marginTop: 50,
       backgroundColor: "#C4C4C4",
       height: 250,
       width: 250,
       borderRadius: 250,
       borderColor: "#B8C0CC",
 
    },
    textInputstyle: {
       marginHorizontal: 20,
       marginTop: 20,
       color: "black"
    },
    termConditionbox: {
       marginTop: 30,
       height: 32,
       width: 32,
       // backgroundColor:"red",
       marginHorizontal: 20,
       borderColor: "#B6B6B6",
       borderWidth: 1
 
    },
    loginButton: {
       height: 64,
       borderColor: "#B6B6B6",
       borderWidth: 1,
       marginHorizontal: 110,
       marginTop: 30,
       justifyContent: "center",
       alignItems: "center"
    },
 })