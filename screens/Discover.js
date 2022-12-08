import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Hotels, NotFound, Profile, Restaurants } from "../assets";
import { Image } from "react-native-animatable";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import ItemCardContainer from "../components/itemCardContainer";
import { getPlaceData } from "../api";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("hotels");
  const [isLoading, setisLoading] = useState(false);
  const [mainData, setmainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect (()=>{
    setisLoading(true);
    getPlaceData(type).then((data)=>{
      setmainData(data);
      setInterval(()=>{
        setisLoading(false); 
      },2000);
    });
  },[type]);

  return (
    <SafeAreaView
      className="flex-1 relative bg-[#f0f2f5]"
      style={global.droidSafeArea}
    >
      <View className="flex-row items-center justify-between px-6 pt-5 mt-10">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Explore the</Text>
          <Text className="text-[36px] text-[#527283]">Beautiful world!!</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Profile}
            className="w-full h-full rounded-md object-cover shadow-lg"
          />
        </View>
      </View>

      <View className="flex-row items-center mx-4 rounded-xl py-1 px-4 mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
            language: "en",
          }}
        />
      </View>

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />


          </View>

          <View>
            <View className="flex-row items-center justify-center px-8 mt-8">
              <Text className="text-[#2C7379] text-[25px] font-bold">
                Top Suggestions
              </Text>
            </View>

            <View className="px-4 mt-5 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data,i)=>(
                    <ItemCardContainer
                    key={i}
                    imageSrc={
                      data?.photo?.images?.medium?.url ?
                      data?.photo?.images?.medium?.url :
                      "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
                    }
                    title={data?.name}
                    location={data?.location_string}
                    data={data}
                  />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="text-2xl text-[#428288] font-semibold">
                      Opps...No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
