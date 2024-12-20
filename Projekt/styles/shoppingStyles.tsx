import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    padding: 15,
    backgroundColor: "#f1f0ef",
  },
  headerText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 800,
  },
  cartItem: {
    height: 90,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: "#fbfbfb",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  cartContainer: {
    marginTop: 40,
    gap: 10,
  },
  cardItemCounter: {
    borderWidth: 1,
    borderColor: "#e2dfdd",
    height: 70,
    width: 50,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardItemImage: {
    height: 70,
    width: 70,
    backgroundColor: "#ff8d29",
  },
  cardItemText: {
    height: 70,
    width: 100,
  },
  cardItemCross: {
    backgroundColor: "#d9b3b3",
    position: "absolute",
    top: 10,
    right: 10,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    display: "flex",
  },
  costContainer: {
    marginTop: 100,
    width: "100%",
    padding: 1,
    gap: 10,
  },
  costItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  costLine: {
    borderWidth: 1,
    borderColor: "#e2dfdd",
    borderRadius: 5,
  },
  checkoutButtonContainer: {
    marginTop: 100,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  checkoutButton: {
    backgroundColor: "#ff8d29",
    width: 180,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  shoppingCartContainer: {
    alignSelf: "flex-end",
    width: 50,
  },
  numberIcon: {
    position: "absolute",
    backgroundColor: "#29ff29",
    borderRadius: 100,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 6,
  },
});

export default style;
