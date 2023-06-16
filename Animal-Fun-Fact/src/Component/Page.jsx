import React, { useState } from 'react';
import '../App.css';
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
    const randomTextArray = ['I clicked a cheetah', 'Cheetah is black and yellow', 'Catch the cheetah'];
    const randomIndex = Math.floor(Math.random() * randomTextArray.length);
    const newText = randomTextArray[randomIndex];
    setRandomText(newText);
  }

  function handleClick3() {
    const randomTextArray = ['I clicked a fox', 'Fox is tall', 'Catch the fox'];
    const randomIndex = Math.floor(Math.random() * randomTextArray.length);
    const newText = randomTextArray[randomIndex];
    setRandomText(newText);
  }

  return (
    <div className='main'>
      <h1>Click on images to display content.</h1>

      {/* Display random text if available */}
       <h3 >{randomText}</h3>
       <div className='image-container'>
      <img src={img1} alt="squirrel" onClick={handleClick} />
      <img src={img3} alt="cheetah" onClick={handleClick2} />
      <img src={img2} alt="fox" onClick={handleClick3} />
      </div>
    </div>
  );
}

export default Page;
