import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemList } from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
    </div>
  );
}

export default App;
