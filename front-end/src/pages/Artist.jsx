import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();
  // filtra a lista de artistas para pegar o objeto Artista pelo id passado pelo pai
  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0];

  // filtra a lista de musicas para retornar um array com as musicas do artista selecionado artistObj
  const songsArrayFromArtistObj = songsArray.filter(
    (currentArtistObj) => currentArtistObj.artist === name
  );

  // Gera um num aleatorio para p Play no fim da pagina da lista de musica,
  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtistObj.length - 1)
  );

  //retorna o id da musica aleatória
  const randomIdFromArtist = songsArrayFromArtistObj[randomIndex]._id;
  //console.log(randomIdFromArtist);

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtistObj} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`} className="single-item__button">
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
