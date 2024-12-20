import { Text, View, TextInput, Image, Button, Animated } from "react-native";
import styles from "@/styles/index";
import { useFonts } from "expo-font";
import { useState } from "react";
import DropDown from "@/components/DropDown";
import resources from "@/resources/resources";
import { imageMap } from "@/components/imageMap";
import {
  handleMonthFormat,
  handleYearFormat,
} from "@/components/helperFunctions";
import { checkCardType } from "@/components/helperFunctions";
import FrontCard from "@/components/frontCard";
import BackCard from "@/components/backCard";

export default function card() {
  const icon = require("@/assets/images/cardAssets/cards/7.jpeg");
  const chip = require("@/assets/images/cardAssets/cards/chip.png");
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
  });

  // Animation Functions
  const [imageOpacity] = useState(new Animated.Value(1));
  const [isFocused, setIsFocused] = useState(false);

  const fadeImage = (newCompany: string) => {
    Animated.timing(imageOpacity, {
      toValue: 0, // Fade out
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCompany(newCompany);
      Animated.timing(imageOpacity, {
        toValue: 1, // Fade in
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };
  // All states
  const [monthValue, setMonthValue] = useState("MM");
  const [yearValue, setYearValue] = useState("YY");
  const [cvv, setCvv] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [companys, setCompany] = useState("visa");
  const [cardHolder, setCardHolder] = useState("Name Namesson");

  // Formations for card number
  const formatSegment = (segment: any, numberOfHash: number) => {
    return segment.padEnd(numberOfHash, "#"); // Fill with '#' if the segment is shorter than numberOfHash characters
  };
  const handleCardNumberChange = (text: any) => {
    const cleanedText = text.replace(/[^0-9]/g, "");
    const newCompany = checkCardType(cleanedText);
    if (newCompany !== companys) {
      fadeImage(newCompany);
    }
    setCardNumber(cleanedText);
  };
  const getSegments = () => {
    let segments = [];
    if (companys === "amex") {
      segments = [
        formatSegment(cardNumber.slice(0, 4), 4),
        formatSegment(cardNumber.slice(4, 10), 6),
        formatSegment(cardNumber.slice(10, 15), 5),
      ];
    } else {
      segments = [
        formatSegment(cardNumber.slice(0, 4), 4),
        formatSegment(cardNumber.slice(4, 8), 4),
        formatSegment(cardNumber.slice(8, 12), 4),
        formatSegment(cardNumber.slice(12, 16), 4),
      ];
    }
    return segments;
  };

  const [firstNumbers, secondNumbers, thirdNumbers, fourthNumbers] =
    getSegments();

  const handleCvvChange = (text: any) => {
    setCvv(text);
  };
  const handleCardNameChange = (text: any) => {
    setCardHolder(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.forOverlay}>
        {!isFocused ? (
          <FrontCard
            firstNumbers={firstNumbers}
            secondNumbers={secondNumbers}
            thirdNumbers={thirdNumbers}
            fourthNumbers={fourthNumbers}
            monthValue={monthValue}
            yearValue={yearValue}
            cardHolder={cardHolder}
            companys={companys}
            imageOpacity={imageOpacity}
          />
        ) : (
          <BackCard cvv={cvv} />
        )}
        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Text style={styles.textStyle}>Card Number</Text>
            <View style={styles.textInput}>
              <TextInput
                style={styles.inputBox}
                maxLength={19}
                keyboardType="numeric"
                onChangeText={handleCardNumberChange}
                value={cardNumber.replace(/(.{4})/g, "$1 ").trim()}
              />
            </View>
          </View>
          <View style={styles.inputField}>
            <Text style={styles.textStyle}>Card Holder</Text>
            <View style={styles.textInput}>
              <TextInput
                style={styles.inputBox}
                onChangeText={handleCardNameChange}
              />
            </View>
          </View>
          <View style={styles.dropDowns}>
            <DropDown
              valueArray={resources.month}
              placeholder="Month"
              values={monthValue}
              setValues={setMonthValue}
            />
            <DropDown
              valueArray={resources.year}
              placeholder="Year"
              values={yearValue}
              setValues={setYearValue}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.textStyle}>CVV</Text>
            <View style={styles.textInput}>
              <TextInput
                keyboardType="numeric"
                maxLength={3}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={handleCvvChange}
              />
            </View>
          </View>
          <Button title="Submit"></Button>
        </View>
      </View>
    </View>
  );
}
