import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import NeoMorph from '../components/NeoMorph'
import { AntDesign, Entypo , Ionicons, Feather } from '@expo/vector-icons'



const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
        <SafeAreaView>
            <Text style={styles.titleMain}>Miki Player</Text>
        </SafeAreaView>

        <View style={styles.body}>
            <NeoMorph style={{ alignItems: "center", marginTop: 150 }} >
                <Image style={styles.imageFirst} source={require("../assets/firstPic.jpg")}  />
            </NeoMorph>
        </View>
        <View style={styles.textBody}>
            <Text style={styles.titleText}>The Sound of life</Text>
            <Text style={styles.titleSubText}>Music isn't just entertainment but a way of life</Text>
        </View>
        <TouchableOpacity style={{marginTop: 40}} onPress={() => navigation.navigate("MainScreen")}>
            <NeoMorph size={80}>
                <NeoMorph size={58}>
                    <NeoMorph size={40}>
                        <AntDesign name="arrowright" size={20} color="gray" />
                    </NeoMorph>
                    
                </NeoMorph>
            </NeoMorph>
        </TouchableOpacity>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEE9F7',
        alignItems: 'center',
    },
    titleMain:{
        color: "gray",
        fontWeight: "200",
        fontSize: 40,
        marginTop: 20
    },
    body:{
        marginTop: 50
    },
    imageFirst:{
        width: 300,
        height:300,
        borderRadius: 150,
        borderColor: "#D7E1F3",
        borderWidth: 10
    },
    textBody:{
        marginTop: 160,
        alignItems: "center",
    },
    titleText: {
        fontWeight: "700",
        fontSize: 34,
        color: "#7B9BFF"
    },
    titleSubText:{
        color: "#8AAAFF",
        fontWeight: "300",
        fontSize: 20
    }
})