import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CategoryBread = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category Bread Screen</Text>
            <Button
                title="Ir a detalles"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    )
}

export default CategoryBread

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
});