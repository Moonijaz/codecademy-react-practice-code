import React, { useState } from 'react';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

function Page() {
  // State to store the random text
  const [randomText, setRandomText] = useState('');

  function handleClick() {
    // Array of random text for the first image
    const randomTextArray = ['I clicked a squirrel', 'Squirrel is eating a nut', 'Catch the squirrel'];

    // Generate a random index to select a random text
    const randomIndex = Math.floor(Math.random() * randomTextArray.length);

    // Get the random text based on the index
    const newText = randomTextArray[randomIndex];

    // Update the state with the new random text
    setRandomText(newText);
  }

  function handleClick2() {
    // Array of random text for the second image
    const randomTextArray = ['I clicked a cheetah', 'Cheetah is black and yellow', 'Catch the cheetah'];

    // Generate a random index to select a random text
    const randomIndex = Math.floor(Math.random() * randomTextArray.length);

    // Get the random text based on the index
    const newText = randomTextArray[randomIndex];

    // Update the state with the new random text
    setRandomText(newText);
  }

  function handleClick3() {
    // Array of random text for the third image
    const randomTextArray = ['I clicked a fox', 'Fox is tall', 'Catch the fox'];

    // Generate a random index to select a random text
    const randomIndex = Math.floor(Math.random() * randomTextArray.length);

    // Get the random text based on the index
    const newText = randomTextArray[randomIndex];

    // Update the state with the new random text
    setRandomText(newText);
  }

  return (
    <div>
      <h1>Click on images to display content.</h1>

      {/* Display random text if available */}
      {randomText && <h3>{randomText}</h3>}
      <img src={img1} alt="squirrel" onClick={handleClick} />
      <img src={img3} alt="cheetah" onClick={handleClick2} />
      <img src={img2} alt="fox" onClick={handleClick3} />
    </div>
  );
}

export default Page;
