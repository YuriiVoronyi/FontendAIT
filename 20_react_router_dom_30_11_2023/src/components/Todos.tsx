import React, { useEffect, useState } from "react";

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
                <React.Fragment key={index}>
                    {todo.title} {todo.completed}
                </React.Fragment>
            ))          
        }
    </>
  );
};

export default Todos;