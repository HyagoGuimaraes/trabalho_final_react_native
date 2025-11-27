import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./style";

export default function DismissKeyboard({ children }: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.keyboard}>{children}</View>
    </TouchableWithoutFeedback>
  );
}
