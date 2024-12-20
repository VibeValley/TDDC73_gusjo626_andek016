import { Text, View, TextInput } from "react-native";
import styles from "@/styles/index";

interface props {
  label: string;
}

export default function InputComponent({ label }: props) {
  return (
    <View style={styles.inputField}>
      <Text style={styles.textStyle}>{label}</Text>
      <View style={styles.textInput}>
        <TextInput />
      </View>
    </View>
  );
}
