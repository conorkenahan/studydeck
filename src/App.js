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
          <CardPreview />
          <CardPreview />
          <CardPreview />
        </div>
      </main>
    </div>
  );
}

export default App;
