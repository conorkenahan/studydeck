import './App.css';
import './normalize.css'
import CardPreview from "./components/CardPreview"
import React, {useState, useEffect} from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://confirmed-scalloped-macrame.glitch.me/api/card')
    .then(res => res.json())
    .then(setCards)
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
            <CardPreview definition={definition} term={term} id={id}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
