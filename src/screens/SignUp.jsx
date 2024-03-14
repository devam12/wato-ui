import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontWeight } from "../common/styles";
import CheckBox from "react-native-check-box";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../common/constants";
import BoxGradient from "../component/BoxGradient";
import GoogleSign from "../component/GoogleSign";
import ORDivider from "../component/ORDivider";
import PrimaryButton from "../component/PrimaryButton";
import Input from "../component/Input";
import SwitchLine from "../component/SwitchLine";
import HeaderText from "../component/HeaderText";

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
      <HeaderText text={"Please sign-up to your account"} />

      {/* Form Box */}
      <View style={{ borderRadius: 10, overflow: "hidden" }}>
        <Image
          source={require("../../assets/image/button-bg.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        />

        <BoxGradient />

        {/* main contaner */}
        <View style={styles.formContainer}>
          {/* container box 1 */}
          <View style={styles.containerFirstBox}>
            {/* Textbox Container */}
            <View style={styles.textBoxContainer}>
              <Input placeholder="Name"></Input>
              <Input placeholder="Email"></Input>
              <Input placeholder="Password"></Input>
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

              {/* Button */}
              <PrimaryButton text={"Sign Up"} />

              {/* Need to sign in */}
              <SwitchLine
                message={"Already have an account?"}
                touchbleMessage={"Sign in instead"}
                onPress={handleSignIn}
              />
            </View>

            {/* Diwider OR */}
            <ORDivider />

            {/* Google Button Container */}
            <GoogleSign />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
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
});
