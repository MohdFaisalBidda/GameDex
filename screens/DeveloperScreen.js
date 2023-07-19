import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { ArrowLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import GamesList from "../components/gamesList";
import { useNavigation } from "@react-navigation/native";
let { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const verticalMargin = ios ? "" : " mt-14";

export default function DeveloperScreen() {
  const navigation =useNavigation();
  return (
    <ScrollView className="flex-1 bg-slate-900">
      <SafeAreaView
        className={`z-20 w-full flex-row justify-between items-center px-4  ${verticalMargin}`}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-red-500 rounded-lg"
        >
          <ArrowLeftIcon size="35" color="black" />
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: "gray",
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
          }}
        >
          <View className="items-center rounded-full h-72 w-72 overflow-hidden border-2 border-gray-400">
            <Image
              source={require("../assets/icon.png")}
              style={{ width: width * 0.74, height: height * 0.43 }}
            />
          </View>
        </View>
        <View className="flex justify-center items-center space-y-1 mt-2">
          <Text className="text-xl text-white">Name</Text>
          <Text className="text-sm text-gray-500">Place</Text>
        </View>
        <View className="flex-row rounded-full mx-12 px-2 bg-black  justify-center items-center mt-4">
          <View className=" border-r-2 border-white px-3  items-center">
            <Text className="font-bold text-lg text-white">Hey</Text>
            <Text className="text-xs text-gray-400">Heyhae</Text>
          </View>
          <View className=" border-r-2 border-white px-3  items-center">
            <Text className="font-bold text-lg text-white">hello</Text>
            <Text className="text-xs text-gray-400">heybae</Text>
          </View>
          <View className="items-center p-2">
            <Text className="font-bold text-lg text-white">bye</Text>
            <Text className="text-xs text-gray-400">heyhae</Text>
          </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wider">
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
          </Text>
        </View>

        <GamesList title={"Related Games"} hideSeeAll={true} />
      </View>
    </ScrollView>
  );
}
