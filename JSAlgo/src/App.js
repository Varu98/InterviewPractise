import "./App.css";
import BrandFilter from "./Components/BrandFilter";
import FilterTodo from "./Components/FilterTodo";
import VanillaBrandFilter from "./Components/VanillaBrandFilter";
import VanillaTodoFilter from "./Components/VanillaTodoFilter";

function App() {
  return (
    <div className="App">
      {/* <BrandFilter /> */}
      {/* <FilterTodo /> */}
      {/* <VanillaBrandFilter /> */}
      <VanillaTodoFilter />
    </div>
  );
}

export default App;
