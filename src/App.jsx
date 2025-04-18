import { useState } from 'react'
import React from 'react';
import BackgroundImg from ' ./src/component/BackgroundImg';
import bgImage from './assets/waldo.jpg'; // make sure you have a file here

const App = () => {
  const handleChange = (e) => {
    console.log("Image clicked at:", e.clientX, e.clientY);
  };

  return (
    <div className="App">
      <h1>Our First Test</h1>
      <BackgroundImg
        src={bgImage}
        setImgSize={() => {}}
        setXY={() => {}}
        handleChange={handleChange}
        correctCoords={{ x: 0, y: 0 }} // dummy value for now
      />
    </div>
  );
};

export default App;
// import './App.css'

// const App = () => <h1>Our First Test</h1>;

// export default App;

// function App() {
  

//   return (
//     <>
      
//     </>
//   )
// }

// export default App
