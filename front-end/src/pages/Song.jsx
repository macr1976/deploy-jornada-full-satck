import React from "react";
import Main from "../components/Main";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs.js";
import { artistArray } from "../assets/database/artists.js";

const Song = () => {
  const { id } = useParams();

  // filtra a lista de musicas para pegar o objeto [0] de Songs pelo id passado pelo pai
  const { image, name, artist, duration, audio } = songsArray.filter(
    (currentSongsObj) => currentSongsObj._id === id
  )[0];

  // filtra a lista de artista para retornar o artista do songsObj
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  // filtra a lista de musicas para retornar um array com as musicas do artista selecionado artistObj
  const songsArrayFromArtistObj = songsArray.filter(
    (currentArtistObj) => currentArtistObj.artist === artist
  );

  // Gera um num aleatorio para p Play no fim da pagina da lista de musica,
  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtistObj.length - 1)
  );

  //retorna o id da musica aleatória
  const randomIdFromArtist = songsArrayFromArtistObj[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtistObj[randomIndex]._id;

  //console.log(artistObj);
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <Link to={`/artist/${artistObj._id}`}>
            <img src={artistObj.image} alt={`Imagem da Musica ${name}`} />
          </Link>
        </div>
      </div>

      <div className="song__bar">
        <div className="song__artist-image">
          <img
            width={75}
            height={75}
            src={image}
            alt={`Imagem do Artista ${artist}`}
          />
        </div>
        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
