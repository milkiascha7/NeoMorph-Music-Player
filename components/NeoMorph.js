import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NeoMorph = ({ children, size, style }) => {
    return (
        <View style={styles.topShadow}>
            <View style={styles.bottomShadow}>
            <View style={[styles.inner, 
                {width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2}, style ]}
            >
                {children}
            </View>
            </View>
        </View>
    )
}

export default NeoMorph

const styles = StyleSheet.create({
    inner: {
        backgroundColor: "#DEE9F7",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#E2ECFD",
        borderWidth: 1
      },
      topShadow: {
        shadowOffset:{
          width: -6,
          height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#FBFFFF',
      },
      bottomShadow: {
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity:1,
        shadowRadius:6,
        shadowColor: "#B7C4DD"
      },
})