import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/solid";
import TrendingGames from "../components/trendingGames";
import GamesList from "../components/gamesList";
import { useNavigation } from "@react-navigation/native";
// import { fetchTrendingGames } from "../api/gamesdb";
import { games } from "../data/games";

export default function HomeScreen() {
  const [trending,setTrending]=useState([]);
  const [upcoming,setUpcoming]=useState([]);
  const [topRated,setTopRated]=useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const data = games;
    setTrending(data);
  }, []);

  return (
    <View className="flex-1 bg-slate-900">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="mt-14 flex-row justify-between items-center mx-4">
          <Bars3BottomLeftIcon size="30" color="red" />
          <Text className="text-white text-xl font-bold">GameHouse</Text>
          <TouchableOpacity>
            <MagnifyingGlassCircleIcon size="30" strokeWidth={2} color="red"  onPress={()=>navigation.navigate("Search")}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Games */}
        <TrendingGames data={trending}/>

        {/* Upcoming Games */}
        <GamesList title={"Upcoming"} data={trending} />

        {/* Top Rated Games  */}
        <GamesList title={"Top Rated"} data={trending} />
      </ScrollView>
    </View>
  );
}
