import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
import {BASE_URL} from './constants/index';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(resolve => {
        setData(resolve.data.results)
      })
      .catch(error => {
        debugger
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList characters={data}/>
    </div>
  );
}

export default App;
