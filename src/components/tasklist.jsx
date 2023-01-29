import React, { useState } from 'react';
import { PlusIcon } from '@iconicicons/react';
import TaskListItem from './tasklistitem';
// ...
const INITIAL_DATA = [{ id: 1, text: ' Empty stuff' }];

export default function TaskList() {
  const [data, setData] = useState(INITIAL_DATA);
  const [newTask, setNewTask] = useState({ id: '', text: '' });

  const handleClick = () => {
    setData([...data, newTask]);
  };

  const handleChange = (key, value, id) => {
    setNewTask({ id, [key]: value });
  };

  const handleDelete = (id) => {
    setData(data.filter((task) => task.id !== id));
  };

  return (
    <div className='bg-[#111] text-[#c4c4c4] p-4 rounded-[8px]'>
      <div className='flex space-x-4 items-center mb-[10px]'>
        <input
          className='border rounded-[6px] w-60  py-1 px-2 bg-transparent border-[#444] focus:outline focus:outline-1 focus:outline-indigo-400 '
          type='text'
          value={newTask.text}
          onChange={(e) =>
            handleChange('text', e.target.value, data.length + 1)
          }
        />
        <button
          className='flex bg-[#222] text-[#c4c4c4] border border-[#444] rounded-[6px] py-1 px-2 text-sm font-medium  items-center hover:border-[#888] hover:bg-[#444]'
          onClick={handleClick}
        >
          Add <PlusIcon />
        </button>
      </div>

      <div>
        {data.length === 0 && <p className='text-[#888]'>Add new task</p>}
        {data.map((item) => (
          <TaskListItem
            key={item.id}
            text={item.text}
            deleteTaskItem={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
