import "./App.css";
import { Cart } from "./component/Cart";
import { Product } from "./component/Product";

function App() {
  return (
    <div className="App">
      <header className="App-header">Shopping Cart</header>
      <Product />
      <Cart />
    </div>
  );
}

export default App;
