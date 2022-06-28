import logo from "./logo.svg";
import "./App.css";
import PizzasList from "./PizzasList";
import { useState, useEffect } from "react";
import Counter from "./Counter";
import PizzaForm from "./PizzaForm";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [getPizzas, setGetPizzas] = useState(0);

  function fetchPizzas() {
    fetch("http://localhost:3000/pizzas")
      .then((res) => res.json())
      .then((pizzaData) => setPizzas(pizzaData));
  }

  useEffect(fetchPizzas, [getPizzas]);
  return (
    <div className="App">
      <h1> PIZZA SHOP </h1>
      <Counter />
      <PizzaForm setPizzas={setPizzas} />
      <PizzasList
        setGetPizzas={setGetPizzas}
        setPizzas={setPizzas}
        pizzas={pizzas}
      />
    </div>
  );
}

export default App;
