import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import playSound from "./services/soundService";

import sound1 from "./sounds/smite-league-of-legends-made-with-Voicemod.mp3";
import sound2 from "./sounds/the-weeknd-rizzz.mp3";

const initialSounds = [
  { name: "Smite", file: sound1 },
  { name: "Rizz", file: sound2 },
  { name: "Test shit 3", file: sound1 },
  { name: "Test shit 4", file: sound2 },
];

const Soundboard: React.FC = () => {
  const [sounds, setSounds] = useState(initialSounds);
  const [newSoundName, setNewSoundName] = useState("");
  const [newSoundFile, setNewSoundFile] = useState<File | null>(null);

  const handleAddSound = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSoundName || !newSoundFile) return;
    const fileURL = URL.createObjectURL(newSoundFile);
    setSounds([...sounds, { name: newSoundName, file: fileURL }]);
    setNewSoundName("");
    setNewSoundFile(null);
  };

  return (
    <div className="soundboard-container">
      <h1 className="soundboard-title">Emils geniale Soundboard</h1>
      <form className="add-sound-form" onSubmit={handleAddSound}>
        <input
          type="text"
          placeholder="Sound name"
          value={newSoundName}
          onChange={e => setNewSoundName(e.target.value)}
          className="add-sound-input"
          required
        />
        <input
          type="file"
          accept="audio/*"
          onChange={e => setNewSoundFile(e.target.files ? e.target.files[0] : null)}
          className="add-sound-input"
          required
        />
        <button type="submit" className="soundboard-btn add-sound-btn">Add Sound</button>
      </form>
      <div className="soundboard-buttons">
        {sounds.map((sound, index) => (
          <button
            key={index}
            onClick={() => playSound(sound.file)}
            className="soundboard-btn"
          >
            {sound.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Soundboard;
