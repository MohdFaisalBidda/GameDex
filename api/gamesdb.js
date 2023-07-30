import axios from "axios";
import { apiKey } from "../constants";

const apiBaseUrl = "https://api.rawg.io/api";
const trendingGamesEndpoint = `${apiBaseUrl}/games?key=${apiKey}`;
const upcomingGamesEndpoint = `${apiBaseUrl}/upcoming?key=${apiKey}`;
const topRatedGamesEndpoint = `${apiBaseUrl}/top_rated?key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const res = await axios.request(options);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
};

export const fetchTrendingGames = () => {
  return apiCall(trendingGamesEndpoint);
};

export const fetchUpcomingGames = () => {
  return apiCall(upcomingGamesEndpoint);
};
export const fetchTopRatedGames = () => {
  return apiCall(topRatedGamesEndpoint);
};
