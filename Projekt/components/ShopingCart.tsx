import { Text, View, Image, TouchableOpacity, Animated } from "react-native";
import { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import style from "@/styles/shoppingStyles";
import CartItem from "./CartItem";
import CostItem from "./CostItem";

import arrowImage from "@/assets/images/arrowIcon.png";
import shoppingCart from "@/assets/images/shopping.png";

interface CartItemType {
  id: number;
  name: string;
  price: number;
}

export default function ShoppingCart() {
  const [totalCost, setTotalCost] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    { id: 1, name: "Item 1", price: 600 },
    { id: 2, name: "Item 2", price: 400 },
  ]);
  const removeCartItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const cost = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalCost(cost);
  }, [cartItems]);

  const slideAnim = useRef(new Animated.Value(300)).current;
  const handleArrowClick = () => {
    setIsVisible(!isVisible);
    Animated.timing(slideAnim, {
      toValue: isVisible ? 300 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={style.container}>
      {!isVisible && (
        <View style={style.shoppingCartContainer}>
          <TouchableOpacity onPress={handleArrowClick}>
            <Image
              source={shoppingCart}
              style={{ width: 30, height: 30, marginTop: 5 }}
            />
            <View style={style.numberIcon}>
              <Text style={{ fontWeight: 600 }}>{cartItems.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <Animated.View
        style={[
          {
            transform: [{ translateX: slideAnim }],
            opacity: slideAnim.interpolate({
              inputRange: [0, 300],
              outputRange: [1, 1],
            }),
          },
        ]}
      >
        {isVisible && (
          <View>
            <TouchableOpacity onPress={handleArrowClick}>
              <Image source={arrowImage} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <Text style={style.headerText}>Din korg</Text>

            <View style={style.cartContainer}>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  cost={item.price}
                  nameOfItem={item.name}
                  onRemove={() => removeCartItem(item.id)}
                />
              ))}
            </View>
            <View style={style.costContainer}>
              <CostItem text="Kostnad" cost={totalCost} />
              <CostItem text="Skatt" cost={Math.round(totalCost * 0.25)} />
              <CostItem text="Frakt" cost={100} />
              <View style={style.costLine} />
              <CostItem
                text="Totalt"
                cost={totalCost + Math.round(totalCost * 0.25) + 100}
              />
            </View>

            <View style={style.checkoutButtonContainer}>
              <View style={style.checkoutButton}>
                <Text style={{ fontWeight: 500 }}>Gå till kassan</Text>
              </View>
            </View>
          </View>
        )}
      </Animated.View>
    </View>
  );
}
