import React, { useEffect, useState } from "react";
import Todo from "./Todo";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todoList, setTodoList] = useState<ITodo[] | null>(null);

  useEffect(() => {
    // console.log('Component did mount');
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data));
  });

  return (
    <>
        {
            todoList && 
            todoList.map((todo, index) => (
                <Todo key={index} done={todo.completed} index={index} taskName={todo.title}/>
            ))          
        }
    </>
  );
};

export default Todos;