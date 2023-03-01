import { useState } from "react";

export const useGameLevel = (numLevels: number) => {
    const [currentLevel, setCurrentLevel] = useState(1);
    
  
    const advanceToNextLevel = () => {
      if (currentLevel < numLevels) {
        setCurrentLevel(currentLevel + 1);
      } else {
        // Handle completion of final level


      }
    };
  
    return { currentLevel, advanceToNextLevel };
  };