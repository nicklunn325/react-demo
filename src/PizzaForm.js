import { useState } from "react";

const PizzaForm = ({ setPizzas }) => {
  const [formState, setFormState] = useState({
    name: "",
    image: "",
    toppings: "",
    likes: 0,
  });

  function handleChange(event) {
    setFormState((prevFormState) => {
      let key = event.target.name;
      return {
        ...prevFormState,
        [key]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formState),
    };

    // setPizzas((prevPizzas) => [...prevPizzas, formState]);

    fetch("http://localhost:3000/pizzas", config)
      .then((res) => res.json())
      .then((pizza) => {
        setPizzas((prevPizzasState) => {
          return [...prevPizzasState, pizza];
        });
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={formState.name}
      />
      <br />
      <label>Image:</label>
      <input
        onChange={handleChange}
        type="text"
        name="image"
        value={formState.image}
      />
      <br />
      <label>Toppings:</label>
      <input
        onChange={handleChange}
        type="text"
        name="toppings"
        value={formState.toppings}
      />
      {/* <br></br>
       */}
      <br />
      <input type="submit" value="Bake Pizza" />
    </form>
  );
};

// what are we trying to do?
// allow the user to fill out a form and create a new pizza - should persist

// create a form component
// component should return form

export default PizzaForm;
