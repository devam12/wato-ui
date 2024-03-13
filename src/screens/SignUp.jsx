import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import StyleUtility, { FontWeight } from "../common/styles";
import CheckBox from "react-native-check-box";
import { useNavigation, useTheme } from "@react-navigation/native";
import { RouteNames } from "../common/constants";

const SignUp = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);

  const handleSignIn = () => {
    navigation.navigate(RouteNames.SIGNIN_SCREEN);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131415",
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.firstLine}>
        <Text style={styles.firstLineText}>Please sign-up to your account</Text>
      </View>

      {/* Form Box */}
      <View style={{ borderRadius: 10, overflow: "hidden" }}>
        <Image
          source={require("../../assets/image/button-bg.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        />

        {/* main contaner */}
        <View style={styles.formContainer}>
          {/* container box 1 */}
          <View style={styles.containerFirstBox}>
            {/* Textbox Container */}
            <View style={styles.textBoxContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
              />
            </View>

            {/* Forgot Text Container */}
            <View style={styles.policyContainer}>
              {/* I acknowledge that this not recommended for use due to its limitations. However, we are utilizing it solely for styling purposes */}
              <View style={{ marginRight: 5 }}>
                <CheckBox
                  onClick={() => {
                    setChecked(!checked);
                  }}
                  checkBoxColor={"#D4FB54"}
                  isChecked={checked}
                />
              </View>

              <Text style={[styles.policyText, { color: "#FFF" }]}>
                I agree &nbsp;
              </Text>
              <TouchableOpacity>
                <Text style={styles.policyText}>to privacy policy & terms</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* container box 2 */}
          <View style={styles.containerSecondBox}>
            {/* Login Container */}
            <View style={{ gap: 20 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#D4FB54",
                  borderRadius: 4,
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                  gap: 8,
                }}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

              <View
                style={[
                  styles.policyText,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={[{ color: "#FFF", opacity: 0.7 }]}>
                  Already have an account? &nbsp;
                </Text>
                <TouchableOpacity onPress={handleSignIn}>
                  <Text style={{ color: "#D4FB54", opacity: 1 }}>
                    Sign in instead
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Diwider OR */}
            <Text style={[styles.buttonText, { color: "#FFF", opacity: 0.6 }]}>
              or
            </Text>

            {/* Google Button Container */}
            <TouchableOpacity style={styles.googleButton}>
              <Image
                source={require("../../assets/image/google.png")}
                style={styles.googleImage}
                resizeMode="contain"
              ></Image>
              <Text style={[styles.buttonText, { color: "#FFF" }]}>
                Continue Woith Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  firstLine: {
    height: 26,
    marginTop: 138,
    marginBottom: 32,
  },
  firstLineText: {
    fontWeight: FontWeight.THIN,
    fontSize: 18,
    lineHeight: 26,
    color: "#FFF",
  },
  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.14,
  },
  formContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    color: "#fff",
    gap: 42,
  },
  containerFirstBox: {
    gap: 20,
  },
  containerSecondBox: {
    gap: 24,
  },
  textBoxContainer: {
    gap: 20,
  },
  input: {
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "transparent",
    borderRadius: 10,
    color: "#FFF",
    gap: 10,
  },
  policyContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  policyText: {
    fontSize: 12,
    fontWeight: FontWeight.THIN,
    lineHeight: 18,
    textAlign: "right",
    color: "#D4FB54",
  },
  buttonText: {
    fontWeight: FontWeight.MEDIUM,
    fontSize: 14,
    lineHeight: 22,
    color: "black",
    textAlign: "center",
  },

  googleButton: {
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  googleImage: {
    height: 20,
    width: 20,
  },
});
