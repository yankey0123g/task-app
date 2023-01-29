import { DotsVerticalIcon } from '@iconicicons/react';
import { useState } from 'react';
// ...
export default function TaskListItem({ text, deleteTaskItem }) {
  const [flip, setFlip] = useState(false);
  return (
    <div className='flex space-x-4 items-center justify-between'>
      <p>{text}</p>
      <span className=''>
        {flip ? (
          <div className='flex space-x-2'>
            <button
              className='flex bg-[#222] text-[#c4c4c4] border border-[#444] rounded-[6px] py-1 px-2 text-sm font-medium  items-center hover:border-[#888] hover:bg-[#444]'
              onClick={deleteTaskItem}
            >
              Delete
            </button>
            <button
              className='flex bg-[#222] text-[#c4c4c4] border border-[#444] rounded-[6px] py-1 px-2 text-sm font-medium  items-center hover:border-[#888] hover:bg-[#444]'
              onClick={() => setFlip(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <DotsVerticalIcon onClick={() => setFlip(true)} />
        )}
      </span>
    </div>
  );
}
