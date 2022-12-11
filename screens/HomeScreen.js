import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import global from "../global";
import * as Animatable from 'react-native-animatable';
import { HeroImage } from "../assets";
import { Adventure } from "../assets";
import { Plain1 } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <ImageBackground
        source={Plain1}
        resizeMode="stretch"
        className="h-full w-full justify-center align-middle"
      >
    <SafeAreaView className="flex-1 relative " style={global.droidSafeArea}>
      <View className="flex-row px-6 mt-8 items-center space-x-5">
        <View className="w-20 h-20 bg-black rounded-full items-center justify-center">
          <Image source={Adventure} className="h-full w-full object-cover" />
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-bold ">
          Adventure Travels
        </Text>
      </View>
      <View className="px-6 mt-4 space-y-3">
        <Text className="text-[#4164f0] text-[23px] font-bold">
          Travel is an investment in yourself
        </Text>
        <Text className="text-black text-base mt-3">
          “Travel is the only thing you buy that makes you richer”. We
          completely swear by this and believe in fulfilling travel dreams that
          make you invariably rich by the day
        </Text>
      </View>

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image 
        animation="fadeIn"
        easing="ease-in-out"
        source={HeroImage} className="h-full w-full object-cover" />

        <TouchableOpacity 
        onPress={() => navigation.navigate("Login")}
        className="absolute bottom-20 w-24 h-24 border-1-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <Animatable.View 
          animation="pulse"
          easing="ease-in-out"
          iterationCount={"infinite"}
          className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View> 
        </TouchableOpacity> 
        </View>
    </SafeAreaView>
    </ImageBackground>
    </View>
  );
};

export default HomeScreen;
