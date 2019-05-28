import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888"
  },
  opButton: {
    color: "white",
    backgroundColor: "orange"
  },
  doubleButton: {
    width: Dimensions.get("window").width / 2
  },
  equalsButton: {
    color: "white",
    backgroundColor: "green"
  }
});

export default props => {
  stylesButton = [styles.button];
  if (props.operation) stylesButton.push(styles.opButton);
  if (props.double) stylesButton.push(styles.doubleButton);
  if (props.label === "=") stylesButton.push(styles.equalsButton);
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};
