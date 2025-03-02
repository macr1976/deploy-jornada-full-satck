import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({ image, name, artist, duration, audio, _id, index }) => {
  //console.log((songDuration = String(duration, "00:00")));
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da Musica ${name}`}
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
