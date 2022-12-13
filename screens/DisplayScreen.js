import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Plain2 } from "../assets";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <ImageBackground
        source={Plain2}
        resizeMode="stretch"
        className="h-full w-full justify-center align-middle"
      >
    <SafeAreaView
      className="flex-1 relative"
      style={global.droidSafeArea}
    >
      <View className="flex-1 relative">
        <ScrollView className="flex-1 px-4 py-6">
          <View className="relative ">
            <Image
              source={{
                uri: data?.photo?.images?.large?.url
                  ? data?.photo?.images?.large?.url
                  : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=",
              }}
              className="w-full h-72 mt-10 object-cover rounded-2xl"
            />

            <View className="absolute mt-7 flex-row inset-x-0 top-5 justify-between px-6">
              <TouchableOpacity
                onPress={() => navigation.navigate("Search")}
                className="w-9 h-10 rounded-md items-center justify-center bg-white"
              >
                <FontAwesome5 name="chevron-left" size={27} color="#06B2BE" />
              </TouchableOpacity>

              <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                <FontAwesome5 name="heartbeat" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
              <View className="flex-row space-x-2 items-center">
                <Text className="text-[12px] font-bold text-gray-100">
                  {data?.price_level}
                </Text>

                <Text className="text-[32px] font-bold text-gray-100">
                  {data?.price}
                </Text>
              </View>
              <View className="px-2 py-2 h-10 w-[25%] rounded-md bg-teal-100">
                <Text>{data?.open_now_text}</Text>
              </View>
            </View>
          </View>

          <View className="nt-6">
            <Text className="text-[#428288] mt-4 text-[24px] font-bold">
              {data?.name}
            </Text>

            <View className="flex-row items-center space-x-2 mt-2">
              <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
              <Text className="text-[#8C9EA6] text-[20px) font-bold">
                {data?.location_string}
              </Text>
            </View>
          </View>

          <View className="mt-6 flex-row items-center justify-between">
            {data?.rating && (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <FontAwesome name="star" size={24} color="#D58574" />
                </View>
                <View>
                  <Text className="text-[#515151]">{data?.rating}</Text>
                  <Text className="text-[#515151]">Ratings</Text>
                </View>
              </View>
            )}

            {data?.price_level && (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <MaterialIcons name="attach-money" size={24} color="black" />
                </View>
                <View>
                  <Text className="text-[#515151]">{data?.price_level}</Text>
                  <Text className="text-[#515151]">Price Level</Text>
                </View>
              </View>
            )}

            {data?.bearing && (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <FontAwesome name="map-signs" size={24} color="black" />
                </View>
                <View>
                  <Text className="text-[#515151]">{data?.bearing}</Text>
                  <Text className="text-[#515151]">Bearing</Text>
                </View>
              </View>
            )}
          </View>

          {data?.description && (
            <Text className="mt-5 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
              {data?.description}
            </Text>
          )}

          {data?.cuisine && (
            <View className="flex-row gap-2 items-center justify-start flex-wrap mt-6">
              {data?.cuisine.map((n) => (
                <TouchableOpacity
                  key={n.key}
                  className="px-2 py-1 rounded-md bg-emerald-100"
                >
                  <Text>{n.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View className=" space-y-4 mt-7 bg-gray-300 rounded-2x1 px-4 py-2">
            {data?.phone && (
              <View className="items-center flex-row space-x-6">
                <FontAwesome name="phone" size={24} color="#428288" />
                <Text className="text-lg">{data?.phone}</Text>
              </View>
            )}
            {data?.email && (
              <View className="items-center flex-row space-x-6">
                <FontAwesome name="envelope" size={24} color="#428288" />
                <Text className="text-lg">{data?.email}</Text>
              </View>
            )}
            {data?.address && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
            )}
          </View>
          <TouchableOpacity className=" w-[180px] h-[50px] mx-auto mt-7 items-center justify-center rounded-lg bg-[#06B2BE]  mb-12">
              <Text className="text-2xl font-semibold uppercase tracking-wide text-gray-100">
                Book Now
              </Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
    </ImageBackground>
    </View>
  );
};

export default ItemScreen;
