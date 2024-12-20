import { Text, View, TouchableOpacity } from "react-native";
import style from "@/styles/shoppingStyles";
import { useState } from "react";

interface props {
    id: number;
    nameOfItem: string;
    cost: number;
    onRemove: () => void;
}

export default function CartItem({ nameOfItem, cost, onRemove }: props) {
    const [itemCount, setItemCount] = useState<number>(1);
    const increment = () => {
        setItemCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        if (itemCount <= 1) {
            onRemove();
        } else {
            setItemCount((prevCount) => prevCount - 1);
        }
    };
    return (
        <View style={style.cartItem}>
            <View style={style.cardItemCounter}>
                <TouchableOpacity onPress={increment} style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>+</Text>
                </TouchableOpacity>
                <Text>{itemCount}</Text>
                <TouchableOpacity onPress={decrement} style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={style.cardItemImage}>
            </View>

            <View style={style.cardItemText}>
                <Text style={{ fontWeight: 600 }}>{nameOfItem}</Text>
                <Text style={{ color: "#ff8d29", fontWeight: 800, }}>{cost}kr</Text>
            </View>

            <View style={style.cardItemCross}>
                <TouchableOpacity onPress={onRemove}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
