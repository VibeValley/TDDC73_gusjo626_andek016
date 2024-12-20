import { Text, View } from "react-native";
import ShoppingCart from "@/components/ShopingCart";
import PasswordStrengthMeter from "@/components/passwordStrength/PasswordStrengthMeter";
import styles from "@/styles/index";

export default function Index() {
  return (
    <View style={styles.container}>
      <ShoppingCart />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* <PasswordStrengthMeter
          title={false}
          hidePassword={false}
          type="circle"
        /> */}
      </View>
    </View>
  );
}
