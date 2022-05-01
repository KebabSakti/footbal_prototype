import { useState, useEffect } from "react";
import initFirebase from "./config/firebase";
import { onValue, push, ref, remove, set, update } from "firebase/database";

function App() {
  const db = initFirebase();

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, "Todo");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();

      const items = [];

      for (let id in data) {
        items.push({ id, ...data[id] });
      }

      setTodos(items);
    });
  }, []);

  const titleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
    if (title.length > 0) {
      const dbRef = push(ref(db, "Todo"));

      set(dbRef, {
        title,
        completed: false,
      });
    }
  };

  const toggleTodo = (item) => {
    const dbRef = ref(db, "Todo/" + item.id);

    update(dbRef, {
      completed: !item.completed,
    });
  };

  const deleteTodo = (item) => {
    const dbRef = ref(db, "Todo/" + item.id);

    remove(dbRef);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div>TO DO</div>
      <input
        style={{ margin: "10px 4px" }}
        type="text"
        onChange={titleOnChange}
        value={title}
      />
      <button onClick={addTodo}>ADD</button>
      <br />
      <div>
        {todos.map((item, index) => (
          <div
            key={index}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.title}
            <button
              onClick={() => {
                toggleTodo(item);
              }}
            >
              Toggle
            </button>
            <button
              onClick={() => {
                deleteTodo(item);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
