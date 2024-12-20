import { Text, View } from "react-native";
import style from "@/styles/shoppingStyles";

interface props {
    text: string,
    cost: number,
}


export default function CostItem({ text, cost }: props) {
    return (
        <View style={style.costItem}>
            <Text>{text}</Text>
            <Text>{cost}kr</Text>
        </View>
    );
}
