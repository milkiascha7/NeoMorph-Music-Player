import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const bottomPlay = () => {
  return (
    <View style={styles.container}>
      <Text>bottomPlay</Text>
    </View>
  )
}

export default bottomPlay

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})