import React, { useState, useEffect } from 'react';

const texts = [
  'Unleash_D_Unstoppables',
  `Brace yourself`,
  `For central india's largest fest`,
  `Have a breathtaking ride`,
  `Countdown of grand spectacle has began`,
  `With its 7 Mega and 23 Mini events`,
  `Get ready for superhero-themed extraganza`,
  `Superheros assemble`,
  `New chapter of our story`,

     // Red
  
  // Add more colors in the desired sequence
];

const Exp = () => {
  const [currenttextindex, setcurrenttextindex] = useState(0);

  useEffect(() => {
    const changeText = setInterval(() => {
      setcurrenttextindex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000); // Change color every 2 seconds

    // Clear the interval when the component is unmounted or when you want to stop changing the color
    return () => clearInterval(changeText);
  }, []); // Empty dependency array to run this effect once on component mount

  const current_text = texts[currenttextindex];

  return (
    <>
      <h4>{current_text}</h4>
    </>
  );
};

export default Exp;