import './App.css';
import './normalize.css'
import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import { getCards } from './services/cardService';
import { CardList } from './components/CardList';
import { Practice } from './components/Practice'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  function handleRemove(id) {
    setCards(existing => existing.filter(c => c.id !== id))
  }

  function handleAdd(card) {
    setCards(existing => [...existing, card])
  }

  function handleUpdate(card) {
    setCards(existing => existing.map(c => c.id === card.id ? card : c))
  }

  return (
    <div>
      <header>
        <h1>Flash<span className="titleHighlight">Me</span></h1>
        <h2>Study helper</h2>
      </header>
      <main>
        <Route exact path='/'>
              <CardList
              cards={cards}
              onAdd={handleAdd}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
          </Route>
        <Route path='/practice' component={Practice}/>
      </main>
    </div>
  );
}

export default App;
