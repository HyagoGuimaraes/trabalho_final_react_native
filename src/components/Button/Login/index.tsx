import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

  interface ButtonLoginProps {
    titulo: string;
    onPressAction: () => void;
  }
export const ButtonLogin = ({titulo, onPressAction}: ButtonLoginProps) => {
  const navigation = useNavigation();

  



  return (
    <TouchableOpacity onPress={onPressAction} style={styles.button}>
      <Text style={styles.text}>{titulo}</Text>
    </TouchableOpacity>
  );
};
