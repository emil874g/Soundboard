import React from "react";

const playSound = (filePath: string) => {
  const audio = new Audio(filePath);
  audio.play().catch((error) => console.error("Error playing sound:", error));
};

export default playSound;
