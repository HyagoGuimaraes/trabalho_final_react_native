import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function DismissKeyboard({ children }: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
}
