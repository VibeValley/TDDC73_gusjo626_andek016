type cardType = {
  amex: string;
  visa: string;
  mastercard: string;
  discover: string;
  troy: string;
};

export const imageMap: cardType = {
  amex: require("@/assets/images/cardAssets/cards/amex.png"),
  visa: require("@/assets/images/cardAssets/cards/visa.png"),
  mastercard: require("@/assets/images/cardAssets/cards/mastercard.png"),
  discover: require("@/assets/images/cardAssets/cards/discover.png"),
  troy: require("@/assets/images/cardAssets/cards/troy.png"),
};
