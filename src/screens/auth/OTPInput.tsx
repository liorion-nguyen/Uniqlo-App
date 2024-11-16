import React from "react";
import { StyleSheet } from "react-native";
import AuthBg from "../../components/AuthBg";
import { Button, Center, Column, Heading, Text } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import FormButton from "../../components/Form/FormButton";

type Props = {} & NativeStackScreenProps<AuthStackParams, "OTPInput">;

const OTPInput = ({ navigation, route }: Props) => {
  
  return (
    <AuthBg>
      <Column flex="1">
        <Center mb="6">
          <Heading color="primary.600" fontSize="lg" mb="2">
            Mã xác thực OTP đã được gửi tới email
          </Heading>
          <Heading color="primary.600" fontSize="lg">
            Bạn hãy kiểm tra hộp thư
          </Heading>
        </Center>
        <FormButton onPress={() => navigation.navigate("Login")}>
          Return to login
        </FormButton>
      </Column>
    </AuthBg>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  otpView: {
    height: 150,
    borderWidth: 0,
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    fontSize: 20,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: "#76CFF1",
  },
  underlineStyleHighLighted: {
    borderColor: "#76CFF1",
  },
});
