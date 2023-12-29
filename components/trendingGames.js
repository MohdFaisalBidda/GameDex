import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

let { width, height } = Dimensions.get("window");

export default function TrendingGames({ data }) {
  const navigation = useNavigation();
  console.log(data);
  return (
    <View className="my-8">
      <Text className="text-white text-xl mx-4 mb-5 font-bold">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <GameCard
            item={item}
            handleClick={() => navigation.navigate("Game",{gameData:item})}
          />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const GameCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={require("../assets/adaptive-icon.png")}
        className="rounded-3xl bg-white"
        style={{ height: height * 0.4, width: width * 0.6 }}
      />
    </TouchableWithoutFeedback>
  );
};
