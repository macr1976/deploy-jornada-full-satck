import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return minutes * 60 + seconds;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  // usando uma referencia pois o Player nao enxergaria o audioPlayer na hora de renderizá-lo
  const audioPlayer = useRef();
  const progressBar = useRef();
  const durationInSeconds = timeInSeconds(duration); //string

  // definindo uma variável de estado 'useState' para que ao mudar esta variavel o player tenha um dos seus 'estados' alterados e seja re-renderizado
  const [isPlaying, setIsPlaying] = useState(false); // use setIsPlaying = true ou setIsPlaying = false para atualizar a váriavel de estado
  const [currentTime, setCurrenTime] = useState(formatTime(0));

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isPlaying);
    //setCurrenTime(formatTime(audioPlayer.current.currentTime));
  };

  // utilizando o useEffectSnippet para atualizar e rerenderizar o que for necessario a cada segundo ,1000ms
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) setCurrenTime(formatTime(audioPlayer.current.currentTime)); // define como o tempo atual em numeros de segundos convertido pra string em minutos
      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000); // o que ele deve fazer

    return () => {
      clearInterval(intervalId); // função de limpeza/re-renderização
    };
  }, [isPlaying]); // quando ele deve fazer

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faPauseCircle : faCirclePlay}
          onClick={playPause}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar ">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
