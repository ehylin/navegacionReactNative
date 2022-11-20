import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BreadDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bread Category</Text>
        </View>
    )
}

export default BreadDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDBF50",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Kanit",
    },
})