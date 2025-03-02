import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

//.map percorre cada elemento do array e tras o, no caso, objeto em currentArtistObj
// {...currentArtistObj} cria uma cópia do objeto
// newArtistObj.id; deleta o id, pois será usado o do MongoDB
// retorna o novo array

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;
  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongsObj) => {
  const newSongsObj = { ...currentSongsObj };
  delete newSongsObj.id;
  return newSongsObj;
});

//console.log(newArtistArray); //teste para ver se retirou o id

const artistResponse = await db
  .collection("artists")
  .insertMany(newArtistArray);
const songResponse = await db.collection("songs").insertMany(newSongsArray);
