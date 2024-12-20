import { Text, View, Image } from "react-native";
import styles from "@/styles/index";

type props = {
  cvv: string;
};

export default function backCard({ cvv }: props) {
  const icon = require("@/assets/images/cardAssets/cards/7.jpeg");

  return (
    <View style={styles.imageContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.blackBar}></View>
        <View style={styles.cvvContainer}>
          <Text style={styles.cvvText}>CVV</Text>
        </View>
        <View style={styles.cardNumbersContainer}>
          <View style={styles.numberBorderCvv}>
            <Text style={styles.numbers}>{cvv}</Text>
          </View>
        </View>
      </View>
      <Image source={icon} style={styles.card} resizeMode="contain" />
    </View>
  );
}
