const Main = ({ setIndex, setIsStarted }) => {
  const handleClick = (idx) => {
    setIndex(idx);
    setIsStarted(true);
  };

  return (
    <main className='flex justify-center items-center flex-col gap-4'>
      <header>
        <h1 className='text-xl sm:text-4xl'>
          Welcome in HTML CSS JAVASCRIPT quiz
        </h1>
      </header>
      <p className='text-lg sm:text-3xl'>Please select category</p>
      <div className='flex flex-col w-full sm:flex-row justify-center items-center gap-3'>
        <button
          onClick={() => handleClick(0)}
          className='bg-orange-400 sm:hover:bg-orange-500 rounded-lg p-3 sm:p-6 text-xl sm:text-2xl w-full'
        >
          HTML
        </button>
        <button
          onClick={() => handleClick(1)}
          className='bg-blue-400 sm:hover:bg-blue-500 rounded-lg p-3 sm:p-6 text-xl sm:text-2xl w-full'
        >
          CSS
        </button>
        <button
          onClick={() => handleClick(2)}
          className='bg-yellow-300 sm:hover:bg-yellow-400 rounded-lg p-3 sm:p-6 text-xl sm:text-2xl w-full'
        >
          JAVASCRIPT
        </button>
      </div>
    </main>
  );
};
export default Main;
