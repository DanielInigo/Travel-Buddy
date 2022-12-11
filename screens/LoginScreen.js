import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { auth } from "../firebase";
import { LoginBack } from "../assets";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Search");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with : ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with : ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View>
      <ImageBackground
        source={LoginBack}
        resizeMode="stretch"
        className="h-full w-full justify-center align-middle"
      >
        <KeyboardAvoidingView className="flex-1 ">

        <Text className="text-black mt-[30%] items-center mx-auto text-4xl font-bold ">
          Adventure Travels
        </Text>
        <View className="items-center justify-center mt-[45%] w-full">
          <View className="w-[80%]">
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              className="bg-white mb-5 px-4 py-2 rounded-md"
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              className="bg-white px-4 py-2 rounded-md"
              secureTextEntry
            />
          </View>

          <View className="w-[60%] justify-center items-center mt-[50px]">
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-blue-400 w-[80%] p-3 rounded-lg items-center"
            >
              <Text className="text-white font-bold text-md">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSignUp}
              className="bg-white border border-blue-400 w-[80%] p-3 rounded-lg items-center mt-3"
            >
              <Text className="text-blue-400 font-bold text-md">Register</Text>
            </TouchableOpacity>
          </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
