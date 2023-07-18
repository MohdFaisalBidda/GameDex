import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  ArrowLeftIcon,
  HeartIcon,
} from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GamesList from "../components/gamesList";
import DeveloperList from "../components/developerList";

let { width, height } = Dimensions.get("window");

const ios = Platform.OS == "ios";
const topMargin = ios ? "" : " mt-12";

export default function GameScreen({hideSeeAll}) {
  const [favourite, setFavourite] = useState(false);
  const [developer,setDeveloper] = useState([1,2,3,4])
  const navigate = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-slate-900"
    >
      <View className="w-full">
        <SafeAreaView
          className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`}
        >
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            className="bg-black rounded-lg"
          >
            <ArrowLeftIcon size="35" color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFavourite(!favourite)}>
            <HeartIcon
              size="35"
              strokeWidth={2}
              color={`${favourite ? "red" : "black"}`}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/icon.png")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>

      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          GTA 5
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released  2020
        </Text>
        <View className="flex-row justify-center  mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">Action .</Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">Open World .</Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">Thrill</Text>
        </View>
        <Text className="mx-4 text-neutral-400 tracking-wide">React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.</Text>
      </View>

      <DeveloperList developer={developer}/>

      <GamesList title={"Related Games"} hideSeeAll={true}/>
    </ScrollView>
  );
}
