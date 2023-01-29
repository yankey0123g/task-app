import TaskList from './components/tasklist';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-t from-indigo-800 to-[#222]  pt-[80px]'>
      <div className=' max-w-fit mx-auto p-4 sm:p-[0] '>
        <h1 className='text-4xl text-neutral-400 mb-10'>Task App </h1>
        <TaskList />

        <p className='flex text-indigo-200 absolute  space-x-2 bottom-4'>
          <span>
            ⓘ Typeface:{' '}
            <a
              className='underline text-indigo-400 font-medium hover:underline-2'
              href='https://rsms.me/inter'
            >
              Inter
            </a>
          </span>
          <span>•</span>
          <span>
            Hosting:{' '}
            <a
              className='underline text-indigo-400 font-medium  hover:underline-2'
              href='https://vercel.com'
            >
              Vercel
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
