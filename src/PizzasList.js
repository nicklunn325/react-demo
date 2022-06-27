import Pizza from "./Pizza";
function PizzasList({ pizzas, test }) {
  //   const { pizzas, test } = props;
  console.log(pizzas, test);
  const displayPizzas = pizzas.map((pizza) => {
    return <Pizza pizza={pizza} />;
    // return <Pizza name={pizza.name} toppings={pizza.toppings}
  });
  return (
    <div>
      <h4> List of Pizzas</h4>
      <ul>{displayPizzas}</ul>
    </div>
  );
}

export default PizzasList;
