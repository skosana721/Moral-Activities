import "./App.css";
import { Cart } from "./component/Cart";
import { Product } from "./component/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Shopping Cart</header>
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
