import "dotenv/config";
import axios from "axios";

const { NODE_ENV } = process.env;
const URL = NODE_ENV === "development" ? "http://localhost:3001/api" : "/api";

const responseFromArtist = await axios.get(`${URL}/artist`);
const responseFromSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseFromArtist.data;
export const songsArray = responseFromSongs.data;

// console.log(responseFromSongs.data);
