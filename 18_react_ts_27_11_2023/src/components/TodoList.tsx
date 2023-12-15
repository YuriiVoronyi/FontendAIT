import React, { ChangeEvent, useState } from 'react'

// rafce or rce
const TodoList = () => {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState<string>('');

    const handleAddTask = () => {
        setTaskList((prev) => [...prev, task]);
        setTask('');
    }

    const handleChangeTask = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask(() => e.target.value);
        // console.log(task); ?
    }

  return (
    <div>
        <h1>TodoList App</h1>
        <input
            type="text"
            placeholder='Enter a task...'
            onChange={(e) => handleChangeTask(e)}
            value={task}
        />
        <button onClick={handleAddTask}>Add task</button>
        <ol>
            {taskList.map((t, i) => (
                <li key={i}>{t}</li>
            ))}
        </ol>
    </div>
  )
}

export default TodoList