import Pizza from "./Pizza";
function PizzasList({ pizzas, setPizzas, setGetPizzas }) {
  const displayPizzas = pizzas.map((pizza) => {
    return (
      <Pizza pizza={pizza} setGetPizzas={setGetPizzas} setPizzas={setPizzas} />
    );
  });
  return (
    <div>
      <h4> List of Pizzas</h4>
      <ul>{displayPizzas}</ul>
    </div>
  );
}

export default PizzasList;
