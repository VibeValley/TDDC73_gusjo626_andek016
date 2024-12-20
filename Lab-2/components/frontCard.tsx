import React from "react";
import { Text, View, Image, Animated } from "react-native";
import styles from "@/styles/index";
import { imageMap } from "@/components/imageMap";
import {
  handleMonthFormat,
  handleYearFormat,
} from "@/components/helperFunctions";

type props = {
  firstNumbers: string;
  secondNumbers: string;
  thirdNumbers: string;
  fourthNumbers: string;
  monthValue: string;
  yearValue: string;
  cardHolder: string;
  companys: string;
  imageOpacity: Animated.Value;
};

export default function frontCard({
  firstNumbers,
  secondNumbers,
  thirdNumbers,
  fourthNumbers,
  monthValue,
  yearValue,
  cardHolder,
  companys,
  imageOpacity,
}: props) {
  const icon = require("@/assets/images/cardAssets/cards/7.jpeg");
  const chip = require("@/assets/images/cardAssets/cards/chip.png");

  return (
    <View style={styles.imageContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.cardIconContainer}>
          <Image source={chip} style={styles.chip} resizeMode="contain" />
          <Animated.Image
            //@ts-ignore
            source={imageMap[companys]}
            style={[styles.company, { opacity: imageOpacity }]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.cardNumbersContainer}>
          <View style={styles.numberBorder}>
            <Text style={styles.numbers}>{firstNumbers}</Text>
            <Text style={styles.numbers}>{secondNumbers}</Text>
            <Text style={styles.numbers}>{thirdNumbers}</Text>
            <Text style={styles.numbers}>{fourthNumbers}</Text>
          </View>
        </View>
        <View style={styles.cardDatesContainer}>
          <View style={styles.cardHolderContainer}>
            <Text style={styles.holderTitle}>Card Holder</Text>
            <Text style={styles.cardHolder}>{cardHolder}</Text>
          </View>
          <View style={styles.dates}>
            <Text style={styles.holderTitle}>Expiration Date</Text>
            <Text style={styles.cardHolder}>
              {handleMonthFormat(monthValue) +
                "/" +
                handleYearFormat(yearValue)}
            </Text>
          </View>
        </View>
      </View>
      <Image source={icon} style={styles.card} resizeMode="contain" />
    </View>
  );
}
