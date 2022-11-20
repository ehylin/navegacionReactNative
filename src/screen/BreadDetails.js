import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const BreadDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bread Category</Text>
            <Button title="Ir a sobre nosotros" onPress={() => navigation.navigate("About")} />
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