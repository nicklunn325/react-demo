function Pizza({ pizza, setPizzas }) {
  const { name, toppings, image, likes } = pizza;
  function handleClick() {
    console.log("clicked", pizza.id);
    let config = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, config);

    setPizzas((prevPizzasState) => {
      let updatedPizzas = prevPizzasState.filter((pie) => {
        return pie.id != pizza.id;
      });
      return updatedPizzas;
    });
  }
  return (
    <div>
      <h4>{name}</h4>
      <p>{toppings}</p>
      <p>{likes} likes</p>
      <button onClick={handleClick}>Eat Pizza</button>
      <form
        onSubmit={() => {
          fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
            method: "DELETE",
          });
        }}
      >
        <input type="submit" value="delete" />
      </form>
      <img src={image}></img>
    </div>
  );
}

export default Pizza;

// add ability to delete

// add delete button
// add eventListener
// delete request
