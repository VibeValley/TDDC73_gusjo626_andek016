import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    fontSize: 30,
  },
  input: {
    width: "80%",
    borderRadius: 8,
    marginTop: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  progressBarContainer: {
    width: "80%",
    height: 5,
    backgroundColor: "gray",
    borderRadius: 8,
    marginTop: 3,
  },
  progress: {
    height: "100%",
    borderRadius: 8,
  },
  circleContainer: {
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default style;
