import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Hotels, Loading, Profile, Restaurants } from "../assets";
import { Image } from "react-native-animatable";
//import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlaceData } from "../api/DataScrab";
import { getLatiData } from "../api/LatiScrab";
import { getLongData } from "../api/LongScrab";
import { Plain2 } from "../assets";
import { SelectList } from "react-native-dropdown-select-list";
import cities from "../data/index.js"

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("");
  //const [isLoading, setisLoading] = useState(false);
  const [mainData, setmainData] = useState([]);
  const [PosLat,setPosLat]=useState(null);
  const[PosLon,setPosLon]=useState(null);
  const textInputRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [selected,setSelected]=useState("");
  const [bl_lat,setBl_lat]=useState(null);
  const [bl_lng,setBl_lng]=useState(null);
  const [tr_lat,setTr_lat]=useState(null);
  const [tr_lng,setTr_lng]=useState(null);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');

  // const data=[
  //   {value:'Delhi'},
  //   {value:'Mumbai'},
  //   {value:'Chennai'},
  //   {value:'Kolkata'},
  //   {value:'Madurai'},
  // ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSubmit = async (place) => {
 

     //setisLoading(true);
    getLatiData(query).then((lat)=>{
      //console.log(selected);
      setPosLat(lat);
      //console.log(PosLat)
    });
    getLongData(query).then((lon)=>{
      //console.log(selected);
      setPosLon(lon);
      //console.log(PosLon)
    });
 
   }  ;

  useEffect (()=>{
    
    const bl_lat=PosLat?.lat+0.25;
    const tr_lat=PosLat?.lat-0.25;
    const bl_lng=PosLon?.lon+0.25;
    const tr_lng=PosLon?.lon-0.25;
    //console.log(bl_lat);
    //console.log(tr_lng);
    setBl_lat(bl_lat);
    setTr_lat(tr_lat);
    setBl_lng(bl_lng);
    setTr_lng(tr_lng);
    getPlaceData(bl_lat,bl_lng,tr_lat,tr_lng,type).then((data)=>{
      setmainData(data);
      //console.log(data);
      // setInterval(()=>{
      //   setisLoading(false); 
      // },2000);
    });
    
  },[bl_lat,bl_lng,tr_lat,tr_lng,type,PosLat,PosLon]);

  // const handleSelect=()=>{
  //   setType("");
  // };

  const handleSearch = (e) => {
    setType("");
    setQuery(e);
    // Filter city names based on the query
    console.log(query);
    const newOptions = cities.filter(city => city.toLowerCase().includes(query.toLowerCase()));
    //console.log(newOptions)
    if(newOptions?.length===0){
      setOptions(["No City in this name"]);
    }
    else
    setOptions(newOptions);
    setShowOptions(true);
  }
  //console.log(cities.length)

  const handleOptionSelect = (option) => {
    console.log(option)
    setQuery(option);
    setShowOptions(false);
  }
  
  return (
    <View>
      <ImageBackground
        source={Plain2}
        resizeMode="stretch"
        className="h-full w-full justify-center align-middle"
      >
    <SafeAreaView
      className="flex-1 relative "
      style={global.droidSafeArea}
    >
      <View className="flex-row items-center justify-between px-6 pt-5 mt-10">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Explore the</Text>
          <Text className="text-[36px] text-[#527283]">Beautiful world!!</Text>
        </View>

        <TouchableOpacity className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg"
        onPress={()=>navigation.navigate("Logout")}
        >
          <Image
            source={Profile}
            className="w-full h-full rounded-md object-cover shadow-lg"
          />
        </TouchableOpacity>

      </View>

      <View className="flex-row ">
        
        {/* <View className="m-auto bg-white w-full"> */}
        {/* //Serachbar */}


        <View className="m-auto mt-6">
      
     <TextInput 
        className="bg-white w-72 border-2  border-gray-500 rounded-lg py-2 px-4 block z-50 "
        type="text" 
        placeholder="Where to...?"  
        value={query} 
        ref={textInputRef}
        onChangeText={e=>handleSearch(e)}
      />
      <View className="w-[25%] m-auto mt-3">
      <Button onPress={()=>onSubmit(query)} className="bg-indigo-500 hover:bg-indigo-700  text-white font-bold py-1 px-2 rounded-full" title="Search"/>
      </View>

      {showOptions && (
        <View className="z-50  row-span-5 row-start-4 bg-white  rounded-lg shadow-lg mt-2">
          {options.splice(0,5).map((option, index) => (
            <Button
              key={index} 
              className="cursor-pointer p-2 bg-grey-500 font-semibold hover:bg-gray-100"
              onPress={() => handleOptionSelect(option)}
              title= {option}
            />
          ))}
          
        </View>
      )}
    </View>



          {/* // */}
        {/* <SelectList 
        size={100}
        data={data}
        setSelected={setSelected}
        onSelect={handleSelect}
        /> */}
        </View>
      {/* </View> */}

      {/* {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : ( */}
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

            <View className="px-4 mt-5 flex-row items-center justify-evenly flex-wrap ">
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
                  <View className="w-full h-[300px] items-center space-y-10 justify-center">
                    <Image
                      source={Loading}
                      className="w-32 h-32 object-cover"
                    />
                    {/* <ActivityIndicator size="large" color="black" /> */}
                    <Text className="text-2xl text-[#428288] font-semibold">
                      Welcome...Search Places!!
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    </View>
  );
};

export default Discover;
