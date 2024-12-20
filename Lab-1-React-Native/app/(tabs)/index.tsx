import { Image, StyleSheet, View, Text, TextInput } from 'react-native';
const imageFood = require("@/assets/images/Food.png");

export default function HomeScreen() {
  return (
    <>
      <View style={styles.screenBar}></View >
      <View style={styles.topBox}>
        <Text style={styles.topBarText}>Example 1</Text>
      </View>
      <View style={styles.container}>

        <Image style={styles.image} source={imageFood} />

        <View style={styles.buttonRow}>
          <View style={styles.buttonBox}>
            <Text>BUTTON</Text>
          </View>
          <View style={styles.buttonBox}>
            <Text>BUTTON</Text>
          </View>

        </View>

        <View style={styles.buttonRow}>
          <View style={styles.buttonBox}>
            <Text>BUTTON</Text>
          </View>
          <View style={styles.buttonBox}>
            <Text>BUTTON</Text>
          </View>

        </View>
        <View style={styles.textInputWrapper}>
          <Text>Email</Text>
          <TextInput style={styles.textInput}></TextInput>

        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  buttonBox: {
    backgroundColor: "#D3D3D3",
    height: 40,
    width: 80,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",

  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginTop: 40,
  },
  topBox: {
    backgroundColor: "#037c6e",
    width: "100%",
    height: 70,
    justifyContent: "center",
    paddingLeft: 30,
  },
  screenBar: {
    backgroundColor: "#025043",
    width: "100%",
    height: 30,
  },
  topBarText: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  textInput: {
    backgroundColor: "#D3D3D3",
    width: 200,
    height: 30,
  },
  textInputWrapper: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%"
  }
});
