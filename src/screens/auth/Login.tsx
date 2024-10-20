import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/user.reducer";
import { Button, Center, Column, FormControl, Row, Text } from "native-base";
import FormInput from "../../components/Form/FormInput";
import AuthBg from "../../components/AuthBg";
import FormButton from "../../components/Form/FormButton";
import { doc, getDoc } from "firebase/firestore";
import { IUserProfile } from "../../types/user";
import LoadingOverlay from "../../components/LoadingOverlay";

type Props = {} & NativeStackScreenProps<AuthStackParams, "Login">;

const Login = ({ navigation }: Props) => {
  const [phone, setPhone] = useState("0708200334");
  const [password, setPassword] = useState("Chugg203");

  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function onSignUp() {
    navigation.navigate("SignUp");
  }

  function onForgotPassword() {
    navigation.navigate("ForgotPassword");
  }

  async function onLoggedIn() {
    try {
      setLoading(true);
      // Handle Login
      dispatch(setUser({
        phone,
        password, 
      } as IUserProfile));
    } catch (err) {
      console.error(err)
      setError("Lỗi hệ thống hoặc mạng");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <LoadingOverlay position="absolute" />}
      <AuthBg>
        <Column space="5">
          <FormControl>
            <FormInput
              onChangeText={setPhone}
              value={phone}
              label="Số điện thoại"
              keyboardType="phone-pad"
            />
          </FormControl>
          <FormControl>
            <FormInput
              onChangeText={setPassword}
              value={password}
              label="Mật khẩu"
              type="password"
            />
          </FormControl>
          <Row justifyContent="space-between" alignItems="center">
            {error && <Text color="error.500">{error}</Text>}
            <Row flex={error ? 0 : 1} justifyContent="flex-end">
              <Button variant="link" _text={{ color: "black" }} onPress={onForgotPassword}>
                Quên mật khẩu
              </Button>
            </Row>
          </Row>
          <FormButton onPress={onLoggedIn}>Đăng nhập</FormButton>
        </Column>
        <Center flexDirection="row" w="100%" mb="8" safeAreaBottom>
          <Text color="primary.600">Bạn chưa có tài khoản?</Text>
          <Button variant="link" _text={{ color: "black" }} onPress={onSignUp}>
            Đăng ký
          </Button>
        </Center>
      </AuthBg>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
