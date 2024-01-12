import React, { useEffect } from "react";
import { useTodoStore } from "../store/dataStore";

function Home() {
  const { todos, getTodos, errorMessage } = useTodoStore();

  useEffect(() => {
    const fetchData = async () => {
      await getTodos();
    };

    fetchData();
  }, [getTodos]);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <li>
            <span className="text-red-500">ID:</span> {todo.id}
            <h1 className="text-red-500 text-justify">{todo.title}</h1>
          </li>
        </div>
      ))}
    </div>
  );
}

export default Home;
