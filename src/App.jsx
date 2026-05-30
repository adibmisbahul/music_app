import { useState, useRef, useEffect, useEffectEvent } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import you from "../src/assets/LANY-you!.mp3";
import xxl from "../src/assets/LANY-XXL.mp3";
import merryCritsmasPleaseDontCall from "../src/assets/merry.mp3";

function App() {
  const [playNow, setPlayNow] = useState();
  const [listMusic, setListMusic] = useState([
    {
      id: 1,
      artis: "lany",
      title: "xxl",
      src: xxl,
    },
    {
      id: 2,
      artis: "lany",
      title: "you",
      src: you,
    },
    {
      id: 3,
      artis: "bleachers",
      title: "merry cristmas , please don't call",
      src: merryCritsmasPleaseDontCall,
    },
  ]);

  const audioRef = useRef(null);

  function play() {
    audioRef.current.play();
  }

  function pause() {
    audioRef.current.pause();
  }

  useEffect(() => {
    const defaultMusic = listMusic[0];
    setPlayNow(defaultMusic.src);
    console.log("default music ->", defaultMusic.title);
  }, []);

  function next() {
    const findMusicNow = listMusic.findIndex((value) => {
      return value.src === playNow;
    });
    console.log(findMusicNow);
    const playMusicNow = listMusic[findMusicNow + 1];
    setPlayNow(playMusicNow.src);
    console.log("now ->", playMusicNow.title);
  }

  return (
    <>
      <audio src={playNow} controls ref={audioRef}></audio>;
      <button onClick={play}>play</button>
      <button onClick={pause}>pause</button>
      <button onClick={next}>next</button>
    </>
  );
}

export default App;
