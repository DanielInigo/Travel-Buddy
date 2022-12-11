import { View, Text,SafeAreaView ,ScrollView,Image } from "react-native";
import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView
      className="flex-1 relative bg-[#f0f2f5]"
      style={global.droidSafeArea}
    >
    <View className="flex-1 relative">
        <ScrollView className="flex-1 px-4 py-6">
            <View className="relative ">
                <Image
                source={{
                    uri :data?.photo?.images?.large?.url ?
                      data?.photo?.images?.large?.url :
                      "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
                }}
                className="w-full h-72 mt-10 object-cover rounded-2xl"
                />

                <View>
                  
                </View>

            </View>
        </ScrollView>
    </View>
    
    </SafeAreaView>
  );
};

export default ItemScreen;
