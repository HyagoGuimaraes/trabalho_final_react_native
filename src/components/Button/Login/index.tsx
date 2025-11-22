import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

  interface ButtonLoginProps {
    titulo: string;
    onPressAction: () => void;
    disabled?: boolean
  }
export const ButtonLogin = ({titulo, onPressAction, disabled}: ButtonLoginProps) => {
  const navigation = useNavigation();

  



  return (
    <TouchableOpacity onPress={onPressAction} style={styles.button} disabled={disabled}>
      <Text style={styles.text}>{titulo}</Text>
    </TouchableOpacity>
  );
};
