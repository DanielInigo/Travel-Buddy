import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect,useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from '../firebase';

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
    <View className="flex-1 items-center justify-center">
      <Text className="mb-10 text-xl">Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity className="bg-blue-400 w-[60%] p-3 rounded-lg items-center"
      onPress={handleSignOut}
      >
        <Text className="text-white font-bold text-md">Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Firstpage

const styles = StyleSheet.create({})