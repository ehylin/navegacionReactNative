import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";


const CartScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <p>Carrito</p>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  }
});
