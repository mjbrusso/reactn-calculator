import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ToastAndroid } from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";

export default class App extends Component {
  MAXDIGITS = 12;

  state = {
    displayValue: "0",
    value: 0.0,
    firstValue: 0,
    op: ""
  };

  setValue(v) {
    this.setState(
      typeof v === "string"
        ? { displayValue: v, value: Number.parseFloat(v) }
        : { displayValue: v.toString().substr(0, this.MAXDIGITS), value: v }
    );
  }

  addDigit = n => {
    if (this.state.displayValue.length == this.MAXDIGITS) return;

    const newValue =
      this.state.displayValue == "0"
        ? n.toString()
        : this.state.displayValue.concat(n.toString());

    this.setValue(newValue);
  };

  backspace = () => {
    const newValue =
      this.state.displayValue.slice(0, this.state.displayValue.length - 1) ||
      "0";

    this.setValue(newValue);
  };

  sqrt = () => {
    if (this.state.value < 0)
      ToastAndroid.show(" Negative!  ", ToastAndroid.LONG);
    else {
      const newValue = Math.sqrt(this.state.value);
      this.setValue(newValue);
    }
  };

  addDot = () => {
    const newValue =
      this.state.displayValue.indexOf(".") < 0
        ? this.state.displayValue.concat(".")
        : this.state.displayValue;

    this.setValue(newValue);
  };

  clearValue = () => {
    this.setValue(0);
    this.setState({ firstValue: 0, op: "" });
  };

  negate = () => {
    this.setValue(-this.state.value);
  };

  setOperation = _op => {
    if (!this.state.op) {
      this.setState({ firstValue: this.state.value, op: _op });
      this.setValue(0);
      return;
    }

    let nv = 0;
    switch (this.state.op) {
      case "+":
        nv = this.state.firstValue + this.state.value;
        break;
      case "-":
        nv = this.state.firstValue - this.state.value;
        break;
      case "×":
        nv = this.state.firstValue * this.state.value;
        break;
      case "÷":
        nv = this.state.firstValue / this.state.value;
        break;
    }

    if (_op === "=") {
      this.setState({ op: "" });
      this.setValue(nv);
    } else {
      this.setState({ firstValue: nv, op: _op });
      this.setValue(0);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Display state={this.state} />
        <View style={styles.buttons}>
          <Button label="AC" onClick={this.clearValue} />
          <Button label="⌫" onClick={this.backspace} />
          <Button label="√" onClick={this.sqrt} />
          <Button label="÷" operation="1" onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="×" operation="1" onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation="1" onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation="1" onClick={this.setOperation} />
          <Button label="0" onClick={this.addDigit} />
          <Button label="." onClick={this.addDot} />
          <Button label="∓" onClick={this.negate} />
          <Button label="=" operation="1" onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
