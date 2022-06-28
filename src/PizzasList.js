import Pizza from "./Pizza";
function PizzasList({ pizzas, setPizzas }) {
  const displayPizzas = pizzas.map((pizza) => {
    return <Pizza pizza={pizza} setPizzas={setPizzas} />;
  });
  return (
    <div>
      <h4> List of Pizzas</h4>
      <ul>{displayPizzas}</ul>
    </div>
  );
}

export default PizzasList;
