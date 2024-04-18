import React, { useState } from 'react';
import TaskComponent from './components/Task';
import { Task } from './types/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTask = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask: Task = {
      id: tasks.length + 1,
      title: title,
      description: description,
      dueDate: dueDate,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  const toggleTaskCompletion = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <div>
        {tasks.map(task => (
          <TaskComponent key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
        ))}
      </div>
    </div>
  );
};

export default App;
