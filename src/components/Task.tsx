import React from 'react';
import { Task } from '../types/Task';

interface TaskProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
}

const TaskComponent: React.FC<TaskProps> = ({ task, toggleTaskCompletion }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due by: {task.dueDate}</p>
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default TaskComponent;
