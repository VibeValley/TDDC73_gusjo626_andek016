import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "@/styles";

const data = [
    { label: "One week", value: "1" },
    { label: "One month", value: "2" },
    { label: "6 months", value: "3" },
    { label: "One year", value: "4" },
    { label: "Five years+", value: "5" },
];
export default function DatePicker() {
    return (
        <View style={styles.progLanguageContainer}>
            <Text style={{ fontSize: 15 }}>Date</Text>
            <Dropdown
                style={styles.dropdown}
                data={data}
                labelField="label"
                valueField="value"
                onChange={() => {
                    console.log("hek");
                }}
            />
        </View>
    );
}
