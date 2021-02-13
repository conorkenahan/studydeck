import './App.css';
import './normalize.css'
import CardPreview from "./components/CardPreview"
import React, {useState, useEffect} from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://confirmed-scalloped-macrame.glitch.me/api/card')
    .then(res => res.json())
    .then(cards => {
      setCards(cards)
    })
  })

  return (
    <div>
      <header>
        <h1>Study<span className="titleHighlight">Deck</span></h1>
        <h2>Retention through repitition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        {/* <pre>{JSON.stringify(cards, null, 2)}</pre> */}
        <div className="gridContainer">
          {cards.map((card) => (
            <CardPreview definition={card.definition} term={card.term}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
