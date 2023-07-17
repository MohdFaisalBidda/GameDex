import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

let { width, height } = Dimensions.get("window");

export default function GamesList({ title, data }) {
  const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text className="text-red-500 text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
       
        { [...new Array(4)].map((item, index) => {
          return (
            <TouchableWithoutFeedback key={index} onPress={()=>navigation.navigate("Game")}>
              <View className="space-y-1 mr-4">
                <Image
                  source={require("../assets/adaptive-icon.png")}
                  className="rounded-3xl bg-white"
                  style={{ width: width * 0.5, height: height * 0.2 }}
                />
                <Text className="text-white text-center">
                  GTA 5
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
