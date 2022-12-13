import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from '../firebase';
import { Plain3 } from '../assets';

const Firstpage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);

    const handleSignOut =() =>{
        auth.signOut()
        .then(()=>{
            navigation.replace("Home")
        })
        .catch(error => alert(error.message))
    }

  return (
    <View>
      <ImageBackground
        source={Plain3}
        resizeMode="stretch"
        className="h-full w-full justify-center align-middle"
      >
        <SafeAreaView className="flex-1 relative " style={global.droidSafeArea}>
        <View className="items-center justify-center px-6 pt-5 mt-[170px]">
          <Text className="text-[40px] text-[#0B646B] font-bold">Make Memories</Text>
          <Text className="text-[36px] text-[#527283]">To travel is to take a journey into yourself</Text>
        </View>
          
    <View className="flex-1 mb-[150px] items-center justify-center">
      <Text className="mb-10 text-xl">Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity className="bg-blue-400 w-[60%] p-3 rounded-lg items-center"
      onPress={handleSignOut}
      >
        <Text className="text-white font-bold text-md">Sign Out</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    </ImageBackground>
    </View>
  )
}

export default Firstpage

const styles = StyleSheet.create({})