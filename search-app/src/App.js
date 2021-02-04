import "./App.css";
import Form from "./component/Form";
import Modal from "./component/Modal";
import StudentsList from "./component/StudentsList";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>BootCamp</h1>
        </header>
      </div>
      <Modal />
      <Form />
      <StudentsList />
    </>
  );
}

export default App;
