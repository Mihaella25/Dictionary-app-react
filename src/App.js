import React, { useState } from 'react';
import './App.css';
import AddWordComponent from './AddWordComponent';
import SearchWordComponent from './SearchWordComponent';

function App() {
  const [dictionary, setDictionary] = useState({});

  const handleAddWord = (newWord) => {
    setDictionary((prevDictionary) => ({
      ...prevDictionary,
      [newWord.toLowerCase()]: true,
    }));
  };
  
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary App</h1>
        </header>
        <main>
          <div className="section">
            <h2>Add a Word</h2>
            <AddWordComponent onAddWord={handleAddWord} />
          </div>
          <div className="section">
            <h2>Search for a Word</h2>
            <SearchWordComponent dictionary={dictionary} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
