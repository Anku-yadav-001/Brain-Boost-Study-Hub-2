import React, { useState, useEffect } from 'react';

const TypedComponent = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setDisplayText(currentWord.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Move to the next word after a delay
        setTimeout(() => {
          setCurrentWordIndex(prevIndex =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000); // Change delay time as needed
      }
    }, 100); // Adjust typing speed as needed

    return () => clearInterval(interval);
  }, [currentWord, words]);

  return <span>{displayText}</span>;
};
export default TypedComponent
