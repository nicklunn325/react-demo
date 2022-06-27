import logo from "./logo.svg";
import "./App.css";
import PizzasList from "./PizzasList";
import { useState, useEffect } from "react";
import Counter from "./Counter";

function App() {
  const [pizzas, setPizzas] = useState([]);

  // let pizzas = [];

  function fetchPizzas() {
    fetch("http://localhost:3000/pizzas")
      .then((res) => res.json())
      .then((pizzaData) => setPizzas(pizzaData));
  }

  useEffect(fetchPizzas, []);

  // let pizzasDiv = document.querySelector(".App");

  // pizzas.forEach((pizza) => {
  //   let h3 = document.createElement("h3");
  //   h3.innerText = pizza.name;
  //   pizzasDiv.append(h3);
  // });

  return (
    <div className="App">
      <h1> PIZZA SHOP </h1>
      <Counter />
      {/* <PizzasList pizzas={pizzas} test="Hello World" /> */}
      {/* {PizzasList({ pizzas: pizzas, test: "hello world" })} */}
    </div>
  );
}

export default App;

// we want to fetch our pizzas
