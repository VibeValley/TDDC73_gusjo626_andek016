import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
        },
        buttonStyle: {
            backgroundColor: "orange",
            width: 100,
            height: 50,
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: [{ translateX: -50 }],
            borderRadius: 4,

        }
    }

)

export default styles;