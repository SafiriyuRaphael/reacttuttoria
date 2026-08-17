import { Plus, Trash } from "lucide-react";
import { NAVLINKS } from "./constants/navItems";
import { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("kill a");
  const [todos, setTodos] = useState([]);

  // setTodo("brian"); // error too many rendera

  useEffect(() => {
    const initialtodos = JSON.parse(localStorage.getItem("todos")) || [];

    setTodos(initialtodos);
  }, []);

  useEffect(() => {
    if (todos.length === 0) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitTodo = (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const id = todos.length > 0 ? todos.length + 1 : 1;
    todos.push({ id, todo, done: false });
    setTodos(todos);
  };

  const deleteTodo = (id) => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredTodos);
  };

  const updateTodo = (id) => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const filteredTodo = todos.find((todo) => {
      return todo.id === id;
    });

    filteredTodo.done = true;

    const filteredTodoIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });

    todos[filteredTodoIndex].done = true;

    setTodos(todos);
  };

  return (
    <div className="bg-black text-white px-8">
      <header className="flex items-center justify-between py-10 ">
        <h1 className="text-3xl font-serif">Ralph todos</h1>
        <nav>
          <ul className="flex items-center gap-6">
            {NAVLINKS.map((link, index) => (
              <li key={index}>{link.label}</li>
            ))}
          </ul>
        </nav>
        <button className="px-5 py-2 bg-black drop-shadow shadow hover:drop-shadow-white/40 drop-shadow-white transition-colors duration-300">
          Subscribe
        </button>
      </header>

      <main className="min-h-screen py-7">
        <h2 className="text-xl pb-3">Add your Todo here 👇👇👇</h2>
        <form
          onSubmit={(e) => submitTodo(e)}
          className="flex items-center gap-5"
        >
          <input
            type="text"
            className="min-w-xl py-2 border border-gray-400 pl-1"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 flex gap-2 items-center"
          >
            Add <Plus />
          </button>
        </form>
        <table className="mt-10">
          <thead>
            <tr>
              <th>Todo</th>

              <th rowSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => updateTodo(todo.id)}>
                    <p className={`${todo.done ? "line-through" : ""}`}>
                      {todo.todo}
                    </p>
                  </button>
                </td>

                <td className="flex items-center gap-3">
                  <button
                    className="bg-white px-4 py-2 flex gap-2 items-center"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <Trash color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default App;
