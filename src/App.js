import './App.css';
import './normalize.css'
import CardPreview from "./components/CardPreview"
import React, {useState, useEffect} from 'react';
import { getCards } from './services/cardService';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  return (
    <div>
      <header>
        <h1>Study<span className="titleHighlight">Deck</span></h1>
        <h2>Retention through repetition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        <div className="gridContainer">
          {cards.map(({id, definition, term}) => (
            <CardPreview definition={definition} term={term} id={id} key={id}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
