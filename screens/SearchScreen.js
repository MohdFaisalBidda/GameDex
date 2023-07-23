import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";

let { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  return (
    <SafeAreaView className="bg-slate-900 flex-1">
      <View className="mt-16 flex-row justify-between items-center mx-4">
        <TextInput
          placeholder="Search"
          placeholderTextColor={"white"}
          className="border font-semibold text-base flex-1 border-gray-400 h-10 rounded-full px-4 text-white tracking-wider"
        />
        <TouchableOpacity className="rounded-full p-2 bg-neutral-500 absolute right-[0px]">
          <XMarkIcon size={25} color={"white"} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <Text className="text-white font-semibold ml-1 my-4">Results (4)</Text>
        <View className="flex-row justify-center flex-wrap space-x-2">
          {[...new Array(4)].map((item, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() => NavigationPreloadManager.push("Game")}
              >
                <View className="space-y-2 mb-4">
                  <Image
                    className="rounded-3xl"
                    source={require("../assets/icon.png")}
                    style={{ width: width * 0.9, height: height * 0.3 }}
                  />
                  <Text className="text-neutral-400 ml-1">MovieName</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
