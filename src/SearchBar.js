const SearchBar = ({ search, setSearch }) => {
  return (
    <form>
      <input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
        type="text"
        name="search"
        placeholder="Find Pizzas..."
      ></input>
    </form>
  );
};

export default SearchBar;
