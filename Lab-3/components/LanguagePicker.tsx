import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "@/styles";

const data = [
  { label: "C#", value: "1" },
  { label: "C++", value: "2" },
  { label: "C", value: "3" },
  { label: "Python", value: "4" },
  { label: "Java", value: "5" },
  { label: "Kotlin", value: "6" },
  { label: "Javascript", value: "7" },
  { label: "Typescript", value: "8" },
];

type props = {
  fetchData: (item: { label: string; value: string }) => void
}

export default function LanguagePicker({ fetchData }: props) {
  return (
    <View style={styles.progLanguageContainer}>
      <Text style={{ fontSize: 15 }}>Programing language</Text>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        onChange={fetchData}
      />
    </View>
  );
}
