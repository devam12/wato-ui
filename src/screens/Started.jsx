import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import StyleUtility, { FontWeight } from "../common/styles";
import Svg, { Path } from "react-native-svg";
import { useNavigation, useTheme } from "@react-navigation/native";
import { RouteNames } from "./../common/constants";

const Started = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate(RouteNames.SIGNIN_SCREEN);
  };

  const handleSignUp = () => {
    navigation.navigate(RouteNames.SIGNUP_SCREEN);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131415",
        paddingHorizontal: 20,
        paddingTop: 296,
      }}
    >
      <View style={{ marginBottom: 18 }}>
        <Svg
          width="132"
          height="59"
          viewBox="0 0 134 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M48.442 22.4772L39.8669 49H28.4501L24.711 33.3954H24.5116L20.7725 49H9.45543L0.880389 22.4772H12.1476L15.8369 38.0319H16.0363L19.3267 22.4772H30.3945L33.6849 38.0319H33.8843L37.5736 22.4772H48.442ZM75.4271 49H65.157C64.6086 48.3519 64.459 46.9061 64.459 45.0116C63.3124 47.7536 60.2712 49.6481 55.9338 49.6481C51.4967 49.6481 47.0098 46.8562 47.0098 41.9206C47.0098 36.287 50.7988 34.0934 57.4793 33.0963C63.0631 32.2488 64.459 31.7003 64.459 30.2546C64.459 28.8586 63.1129 28.2105 61.4677 28.2105C59.5234 28.2105 58.277 29.3572 57.6788 31.2517L48.0568 30.5038C49.2533 24.9699 54.3385 21.8291 61.6173 21.8291C70.0926 21.8291 74.7291 25.1195 74.7291 31.3015V44.3136C74.7291 46.7067 74.779 48.1525 75.4271 49ZM64.459 38.9293V36.9351C63.6115 37.2841 62.6642 37.4835 60.7698 37.8824C58.5761 38.3311 57.4793 39.378 57.4793 40.9734C57.4793 42.469 58.5761 43.516 60.1715 43.516C61.8167 43.516 64.459 42.2696 64.459 38.9293Z"
            fill="white"
          />
          <Path
            d="M118.737 49.4868C122.709 49.4868 126.401 48.1981 129.105 45.7385C131.815 43.273 133.501 39.6608 133.501 35.0886C133.501 30.4915 131.816 26.8536 129.106 24.3683C126.402 21.8886 122.71 20.5859 118.737 20.5859C114.763 20.5859 111.071 21.8886 108.367 24.3683C105.657 26.8536 103.973 30.4915 103.973 35.0886C103.973 39.6608 105.658 43.273 108.368 45.7385C111.073 48.1981 114.764 49.4868 118.737 49.4868ZM118.737 45.6654C117.995 45.6654 117.401 45.4708 116.912 45.0959C116.416 44.7159 115.992 44.1219 115.648 43.2627C114.954 41.5287 114.639 38.8419 114.639 35.0886C114.639 31.3341 114.941 28.62 115.63 26.8586C115.971 25.9856 116.395 25.3793 116.893 24.9906C117.384 24.6076 117.984 24.4074 118.737 24.4074C119.49 24.4074 120.089 24.6076 120.58 24.9906C121.078 25.3793 121.502 25.9856 121.843 26.8586C122.532 28.62 122.834 31.3341 122.834 35.0886C122.834 38.8438 122.532 41.5302 121.844 43.2642C121.504 44.1228 121.081 44.7158 120.584 45.0953C120.094 45.4698 119.493 45.6654 118.737 45.6654Z"
            fill="white"
            stroke="white"
            stroke-linejoin="round"
          />
          <Path
            d="M91.555 49.1414C95.162 49.1414 98.4925 47.0855 100.509 45.236C100.994 44.7912 101.082 44.0875 100.787 43.5333L100.505 43.0027C100.111 42.2602 99.2162 42.052 98.5196 42.3278C97.9462 42.5547 97.2319 42.7418 96.4726 42.7418C95.2686 42.7418 94.416 42.387 93.8515 41.7186C93.2736 41.0342 92.9259 39.9378 92.9259 38.3095V25.6048C92.9259 25.3563 93.1273 25.1548 93.3758 25.1548H97.9301C98.7309 25.1548 99.3801 24.5056 99.3801 23.7048V22.4896C99.3801 21.6888 98.7309 21.0396 97.9301 21.0396H93.3758C93.1273 21.0396 92.9259 20.8382 92.9259 20.5897V14.4422C92.9259 13.6414 92.2767 12.9922 91.4759 12.9922H91.3723C90.999 12.9922 90.6409 13.1363 90.3714 13.3924C87.0568 16.5412 83.8576 19.2878 79.8708 22.2005C79.4969 22.4736 79.2734 22.9091 79.2734 23.3746V23.7048C79.2734 24.5056 79.9226 25.1548 80.7234 25.1548H82.5116C82.7601 25.1548 82.9616 25.3563 82.9616 25.6048V39.6075C82.9616 42.7877 83.6796 45.1912 85.1621 46.7997C86.6521 48.4162 88.8317 49.1414 91.555 49.1414Z"
            fill="white"
            stroke="white"
            stroke-linejoin="round"
          />
        </Svg>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Zero Cost</Text>
        <Text style={styles.text}>WhatsApp Messaging</Text>
        <Text style={styles.text}>platform</Text>
      </View>

      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Image
          source={require("../../assets/image/button-bg.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        />
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignIn} style={styles.signupLine}>
        <Text style={[styles.signupLineText, { color: "#FFFFFF" }]}>
          Already have an account?
        </Text>
        <Text style={[styles.signupLineText, { color: "#D4FB54" }]}>
          &nbsp;&nbsp;Sign in instead
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Started;

const styles = StyleSheet.create({
  textContainer: {
    width: 289,
    marginBottom: 74,
  },
  text: {
    fontSize: 28,
    fontWeight: FontWeight.THIN,
    lineHeight: 42,
    color: "white",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    opacity: 0.4,
  },
  buttonText: {
    fontWeight: FontWeight.MEDIUM,
    fontSize: 16,
    lineHeight: 22,
    color: "#FFFFFF",
  },

  signupLine: {
    alignItems: "center",
    justifyContent: "center",
    height: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  signupLineText: {
    textAlign: "center",
    lineHeight: 18,
    fontWeight: FontWeight.THIN,
    fontSize: 12,
    color: "#FFFFFF",
    letterSpacing: 0,
    textAlign: "center",
  },
});
