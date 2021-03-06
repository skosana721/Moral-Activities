import "./App.css";
import Form from "./component/Form";
import Modal from "./component/Modal";
import StudentsList from "./component/StudentsList";
import { useSelector } from "react-redux";

function App() {
  const modal = useSelector((state) => state.modal);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>BootCamp</h1>
        </header>
      </div>
      {modal.isModalOpen && <Modal />}
      <Form />
      <StudentsList />
    </>
  );
}

export default App;
