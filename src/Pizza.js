function Pizza({ pizza }) {
  const { name, toppings, image, likes } = pizza;
  return (
    <div>
      <h4>{name}</h4>
      <p>{toppings}</p>
      <p>{likes} likes</p>
      <img src={image}></img>
    </div>
  );
}

export default Pizza;
