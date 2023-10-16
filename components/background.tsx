"use client";

import { useEffect, useState, useCallback } from "react";
import "../app/globals.css";

export const Background = () => {
  const getRandomValue = () => Math.floor(Math.random() * (30 - 11 + 1)) + 11;

  const [randomValues, setRandomValues] = useState<number[]>([]);
  const [bubblePositions, setBubblePositions] = useState<number[]>([]);

  const updateValues = useCallback(() => {
    const arrayLength = Math.floor(window.innerWidth / 28);
    const values = Array.from({ length: arrayLength }, () => getRandomValue());
    setRandomValues(values);
    setBubblePositions(Array.from({ length: arrayLength }, () => 0));
  }, []);

  useEffect(() => {
    // Initial setup when the component mounts
    updateValues();

    // Listen for window resize events
    const handleResize = () => {
      updateValues();
    };
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateValues]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      // Update bubble positions based on animation
      setBubblePositions((prevPositions) =>
        prevPositions.map((position, index) =>
          position <= window.innerHeight ? position + 1 : position
        )
      );
    }, 1000 / 60);
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  useEffect(() => {
    // Remove bubbles individually if they meet the criteria
    setRandomValues(
      (prevValues) =>
        prevValues
          .map((_, index) => {
            if (bubblePositions[index] >= window.innerHeight) {
              // Return -1 to indicate removal
              return -1;
            }
            return prevValues[index];
          })
          .filter((value) => value !== -1) // Filter out -1 values to remove bubbles
    );
  }, [bubblePositions]);

  return (
    <div className="bubbles items-center justify-center">
      {randomValues.map((value, index) => {
        if (value === -1) {
          // Don't render bubbles with -1 value (removed)
          return null;
        }
        return (
          <span
            key={index}
            style={
              {
                "--i": value,
                transform: `translateY(${bubblePositions[index]}px)`,
              } as any
            }
          ></span>
        );
      })}
    </div>
  );
};
