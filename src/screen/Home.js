import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenidos panaderia react native</Text>
            <Button title="Ir a Categorias" onPress={() => navigation.navigate("Categories")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C539B4",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Kanit",
    },
});