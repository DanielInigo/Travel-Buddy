import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, type, setType }) => {

    const handlePress=()=>{
        setType(title.toLowerCase());
    }

  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
      <View
        className={`w-24 h-24 items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-300" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full rounded-full h-full object-contain" />
      </View>

      <Text className="text-[#008CC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
