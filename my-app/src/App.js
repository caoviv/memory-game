import { useState } from "react";
import Card from "./components/Card";
import shuffle from "./utilities/shuffle";

function App() {
  const [cards, setCards] = useState(shuffle)
  return (
    <div className="App">
      <Card key={id} image={image} selected={false} onClick={() => { }} />
    </div>
  );
}

export default App;
