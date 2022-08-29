import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

import * as tf from '@tensorflow/tfjs'
import * as speechCommands from '@tensorflow-models/speech-commands';


function App() {
 useEffect(()=>{
async function myfunc(){

  try{
  const recognizer = speechCommands.create('BROWSER_FFT');

  await recognizer.ensureModelLoaded();

// See the array of words that the recognizer is trained to recognize.
console.log(recognizer.wordLabels());

// `listen()` takes two arguments:
// 1. A callback function that is invoked anytime a word is recognized.
// 2. A configuration object with adjustable fields such a
//    - includeSpectrogram
//    - probabilityThreshold
//    - includeEmbedding
recognizer.listen(result => {
  // - result.scores contains the probability scores that correspond to
  //   recognizer.wordLabels().
  // - result.spectrogram contains the spectrogram of the recognized word.
}, {
  includeSpectrogram: true,
  probabilityThreshold: 0.75
});
  }
  catch(e){
    console.log(e);
  }
}
myfunc();


 })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
