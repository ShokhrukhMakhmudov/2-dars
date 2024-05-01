import { useState, useRef } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // useState
  const [text, setText] = useState("");
  // useRef
  // const input = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    // let newTodo = input.current.value;

    setTodos((prev) => [...prev, text]);

    setText("");
    // input.current.value = "";
  }

  return (
    <>
      <Header />
      <main>
        <div className="container section-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>
          <ul className="todos-list">
            {todos.map((item, ind) => {
              return <li key={ind}>{item}</li>;
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
