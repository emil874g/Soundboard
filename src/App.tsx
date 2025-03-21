import React from "react";
import logo from "./logo.svg";
import playSound from "./services/soundService";

import sound1 from "./sounds/smite-league-of-legends-made-with-Voicemod.mp3";
import sound2 from "./sounds/the-weeknd-rizzz.mp3";

const sounds = [
  {
    name: "Sound 1",
    file: sound1,
  },
  { name: "Sound 2", file: sound2 },
];

const Soundboard: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Soundboard</h1>
      {sounds.map((sound, index) => (
        <button
          key={index}
          onClick={() => playSound(sound.file)}
          style={{ margin: "10px", padding: "10px" }}
        >
          {sound.name}
        </button>
      ))}
    </div>
  );
};

export default Soundboard;
