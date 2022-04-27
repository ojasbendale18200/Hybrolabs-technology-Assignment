import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import List from "./components/List";

function App() {
  const [user, setUser] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const removeItem = (id) => {
    setUser(user.filter((item) => item.id !== id));
    showAlert(true, "danger", "item remove Successfully");
  };

  async function getRandomUser() {
    const randomNumber = Math.floor(Math.random() * 10);
    const res = await fetch(`https://swapi.dev/api/people/${randomNumber}`);
    const data = await res.json();
    console.log(data);

    const newItem = { id: new Date().getTime().toString(), title: data.name };
    setUser([...user, newItem]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRandomUser();
    showAlert(true, "success", "item added to the list");
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <main className="App">
      <div className="form-container">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={user} />}
        <form className="form" onClick={handleSubmit}>
          <button className="submit-btn">Add Record</button>
        </form>
        <h4>Name</h4>
        <div className="user-container">
          <List list={user} removeItem={removeItem} />
        </div>
      </div>
    </main>
  );
}

export default App;
