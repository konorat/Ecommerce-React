import React, { useState, createContext } from 'react';
import './App.css';
import { Content } from './Content';
import { Header } from './components/Header';

export const buscaContext = createContext();

function App() {
  const [busca, setBusca] = useState('');

  const updateParam = (p) => {
    setBusca(p);
    console.log(p);
  };

  return (
    <buscaContext.Provider value={busca}>
      <div className='App'>
        <Header handleUpdate={updateParam} />
        <Content />
      </div>
    </buscaContext.Provider>
  );
}

export default App;
