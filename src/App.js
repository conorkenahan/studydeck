import './App.css';
import './normalize.css'
import CardPreview from "./components/CardPreview"

function App() {
  return (
    <div>
      <header>
        <h1>Study<span className="titleHighlight">Deck</span></h1>
        <h2>Retention through repitition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        <div className="gridContainer">
          <CardPreview definition="quack" term="What does a duck say?"/>
          <CardPreview definition="moo" term="What does a cow say?"/>
          <CardPreview definition="woof" term="What does a dog say?"/>
        </div>
      </main>
    </div>
  );
}

export default App;
