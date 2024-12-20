import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/passwordStyles";

interface props {
  title?: boolean;
  hidePassword?: boolean;
  placeholder?: string;
  includeLength?: boolean;
  includeUpperCase?: boolean;
  includeLowerCase?: boolean;
  includeDigit?: boolean;
  includeSpecialChar?: boolean;
  typeBar?: boolean;
  typeCircle?: boolean;
  type?: string;
  weakColor?: string;
  mediumColor?: string;
  strongCOlor?: string;
}

export default function PasswordStrengthMeter({
  title = false,
  hidePassword = true,
  placeholder = "Enter password",
  includeLength = true,
  includeUpperCase = true,
  includeLowerCase = true,
  includeDigit = true,
  includeSpecialChar = true,
  type = "bar",
  weakColor = "red",
  mediumColor = "yellow",
  strongCOlor = "green",
}: props) {
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  const getActiveColor = (message: string) => {
    switch (message) {
      case "Weak":
        return weakColor;
      case "Medium":
        return mediumColor;
      case "Strong":
        return strongCOlor;
      default:
        return "black";
    }
  };

  const handlePassword = (text: string) => {
    const strengthChecks = {
      ...(includeLength && { length: false }),
      ...(includeUpperCase && { hasUpperCase: false }),
      ...(includeLowerCase && { hasLowerCase: false }),
      ...(includeDigit && { hasDigit: false }),
      ...(includeSpecialChar && { hasSpecialChar: false }),
    };

    let numberOfChecks = Object.keys(strengthChecks).length;

    if ("length" in strengthChecks) {
      strengthChecks.length = text.length >= 8 ? true : false;
    }
    if ("hasUpperCase" in strengthChecks) {
      strengthChecks.hasUpperCase = /[A-Z]+/.test(text);
    }
    if ("hasLowerCase" in strengthChecks) {
      strengthChecks.hasLowerCase = /[a-z]+/.test(text);
    }
    if ("hasDigit" in strengthChecks) {
      strengthChecks.hasDigit = /[0-9]+/.test(text);
    }
    if ("hasSpecialChar" in strengthChecks) {
      strengthChecks.hasSpecialChar = /[!@#$%^&*()]+/.test(text);
    }

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strongLimit = numberOfChecks;
    let mediumLimit = Math.floor(numberOfChecks / 2);
    let strength =
      verifiedList.length === strongLimit
        ? "Strong"
        : verifiedList.length >= mediumLimit
        ? "Medium"
        : "Weak";
    setPassword(text);
    setMessage(strength);
    setProgress((verifiedList.length / numberOfChecks) * 100);
  };

  return (
    <View
      style={[styles.container, type === "circle" && { flexDirection: "row" }]}
    >
      {title && <Text style={styles.header}>Password</Text>}
      <TextInput
        style={styles.input}
        onChangeText={(text) => handlePassword(text)}
        value={password}
        secureTextEntry={hidePassword}
        placeholder={placeholder}
      />
      {type == "circle" && password.length !== 0 && (
        <View style={styles.circleContainer}>
          <View
            style={[
              styles.circle,
              {
                backgroundColor: getActiveColor(message),
              },
            ]}
          />
          <Text
            style={{
              color: getActiveColor(message),
            }}
          >
            {message}
          </Text>
        </View>
      )}

      {type == "bar" && (
        <View
          style={{
            height: "20%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progress,
                {
                  width: `${progress}%`,
                  backgroundColor: getActiveColor(message),
                },
              ]}
            ></View>
          </View>
          {password.length !== 0 && (
            <Text style={{ color: getActiveColor(message) }}>{message}</Text>
          )}
        </View>
      )}
    </View>
  );
}
