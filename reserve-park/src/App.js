import "./App.css";
import Lions from "./component/Lions";
import Rhinos from "./component/Rhinos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reserver Park</h1>
      </header>
      <div className="container">
        <Lions />
        <Rhinos />
      </div>
    </div>
  );
}

export default App;
