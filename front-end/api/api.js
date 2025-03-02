import axios from "Axios";

const URL = "http://localhost:3001";

const responseFromArtist = await axios.get(`${URL}/artist`);
const responseFromSongs = await axios.get(`${URL}/songs`);

// console.log(responseFromSongs.data);
export const artistArray = responseFromArtist.data;
export const songsArray = responseFromSongs.data;
