import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  displayValue: {
    fontSize: 54,
    color: "white",
    fontFamily: "monospace"
  },
  firstRow: {
    fontSize: 22,
    color: "#CACACA",
    fontFamily: "monospace",
    paddingHorizontal: 3
  }
});

export default props => (
  <View style={styles.display}>
    <View flexDirection="row">
      <Text style={styles.firstRow}>
        {props.state.op ? props.state.firstValue : ""}
      </Text>
      <Text style={styles.firstRow}>{props.state.op}</Text>
    </View>
    <Text style={styles.displayValue} numberOfLines={1}>
      {props.state.displayValue}
    </Text>
  </View>
);
