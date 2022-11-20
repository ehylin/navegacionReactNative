import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CategoriesScreen</Text>
            <Button title="Go to Bread" onPress={() => navigation.navigate("Bread")} />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF724C",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Kanit",
    },
});