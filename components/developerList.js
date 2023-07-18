import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function DeveloperList({developer}) {
    const navigation = useNavigation();
  return (
    <View className="mx-4 my-6">
      <Text className="text-white text-xl mb-6">Developer</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {developer && developer.map((item,key) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("Developer",item)} key={key} className="mr-4 items-center mb-4">
              <View className="overflow-hidden  rounded-full  h-20 w-20  items-center border border-neutral-500">
                <Image
                  source={require("../assets/adaptive-icon.png")}
                  className="rounded-2xl h-24 w-20"
                />
              </View>
              <Text className="text-white text-xs mt-1">Developer Name</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
