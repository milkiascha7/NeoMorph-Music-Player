import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import NeoMorph from './NeoMorph'
import { AntDesign, Entypo , Ionicons, Feather } from '@expo/vector-icons'


const bottomPlay = ({ title, subTitle }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>2pac</Text>
        <Text style={styles.subTitle}>Uppercut</Text>
      </View>
       
      <View style={styles.controller}>
        <TouchableOpacity style={styles.innerButton}>
          <NeoMorph size={30}>
            <Feather name="rewind" size={22} color="gray" />
          </NeoMorph>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.innerButton}>
          <NeoMorph size={40} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF"}}>
            <Ionicons name="ios-pause" size={32} color="#FFFFFF" />
          </NeoMorph>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.innerButton}>
          <NeoMorph size={30}>
            <Feather name="fast-forward" size={22} color="gray" />
          </NeoMorph>
        </TouchableOpacity>
      </View>
      
      
    </View>
  )
}

export default bottomPlay

const styles = StyleSheet.create({
    container:{
        flex: 1,
        zIndex: 3,
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        backgroundColor:'#7B9BFF',
        backgroundColor:"rgba(255, 255, 255, 0.9)",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 30,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        borderWidth: 2,
        borderColor: "#7B9BFF",
    },
    controller:{
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",  
    },
    innerButton:{
      marginHorizontal:5
    },
    title:{
      color: "#7B9BFF",
      fontWeight: '700',
      fontSize: 25,
      marginBottom:5
    },
    subTitle:{
      color: "gray",
      fontWeight:"500"
    },
})