import logo from "./logo.svg";
import "./App.css";
import PizzasList from "./PizzasList";
import { useState, useEffect } from "react";
import Counter from "./Counter";
import SearchBar from "./SearchBar";
import PizzaForm from "./PizzaForm";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [search, setSearch] = useState("");

  function fetchPizzas() {
    fetch("http://localhost:3000/pizzas")
      .then((res) => res.json())
      .then((pizzaData) => setPizzas(pizzaData));
  }

  useEffect(fetchPizzas, []);

  let filteredPizzas = pizzas.filter((pizza) => {
    let query = search.toLowerCase();
    return (
      pizza.name.toLowerCase().includes(query) ||
      pizza.toppings.toLowerCase().includes(query)
    );
  });
  return (
    <div className="App">
      <h1> PIZZA SHOP </h1>
      {/* <Counter /> */}
      <PizzaForm setPizzas={setPizzas} />
      <SearchBar search={search} setSearch={setSearch} />
      <PizzasList setPizzas={setPizzas} pizzas={filteredPizzas} />
    </div>
  );
}

export default App;
