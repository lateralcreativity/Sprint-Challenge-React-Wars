import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import {BASE_URL} from './constants/index';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const StyledApp = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
`


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
    <StyledApp>
      <Header />
      <CharacterList characters={data}/>
    </StyledApp>
  );
}

export default App;
