import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nosotros</Text>
        </View>
    )
}

export default About


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7A4A4",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Kanit",
    },
})