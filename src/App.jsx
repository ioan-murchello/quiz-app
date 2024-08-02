import { useEffect, useState } from 'react';
import './App.css';
import QuizItem from './components/QuizItem';
import Main from './components/Main';
import Complete from './components/Complete';
import { questions } from './questions';
import { onThemeSelectHandler } from './theme-switcher';

import htmlImg from './assets/html.svg';
import css from './assets/css.svg';
import js from './assets/js.svg';

import sun from './assets/sun.svg';
import moon from './assets/moon.svg';

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [quizes, setQuizes] = useState(questions[index]);
  const [ended, setEnded] = useState(false); 
  const [results, setResults] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const handleClick = (isCorrect) => {
    setResults((prev) => [...prev, isCorrect]);

    setQuestionIndex((prev) => {
      if (prev === quizes.length - 1) {
        setEnded(true);
        return prev;
      } else {
        return (prev += 1);
      }
    });
  };

  const newQuiz = () => {
    setIsStarted(false);
    setIndex(0); 
    setResults([]);
    setEnded(false);
    setQuestionIndex(0);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      onThemeSelectHandler(localTheme);
    } else {
      onThemeSelectHandler(theme);
    }
    setQuizes(questions[index]);
  }, [questionIndex, index, theme]);

  return (
    <div className='sm:mt-5'>
      <button className='flex w-full justify-end' onClick={toggleTheme}>
        {theme === 'light' ? (
          <img className='w-6 h-6' src={moon} />
        ) : (
          <img className='w-6 h-6' src={sun} />
        )}
      </button>
      {!isStarted ? (
        <Main setIsStarted={setIsStarted} setIndex={setIndex} />
      ) : (
        <div className='flex justify-center flex-col gap-4 items-center'>
          {index === 0 ? (
            <img className='w-10 h-10' src={htmlImg} alt='html' />
          ) : index === 1 ? (
            <img className='w-10 h-10' src={css} alt='css' />
          ) : (
            <img className='w-10 h-10' src={js} alt='javascript' />
          )}
          <header>
            <h2 className='text-2xl'>
              questions: {questionIndex + 1} / {quizes.length}
            </h2> 
            <ul className='grid grid-cols-10 sm:flex justify-center items-center gap-1 my-3'>
              {Array.from(
                { length: quizes.length },
                (_, index) => index + 1
              ).map((el, index) => (
                <li
                  className='flex justify-center items-center rounded-full overflow-hidden  w-3 h-3 sm:w-6 sm:h-6 border border-[#727272] '
                  key={el}
                >
                  <span
                    className={`w-[80%] h-[80%] transition-all duration-500 rounded-full ${
                      results[index] === true
                        ? 'bg-green-400 ping-once'
                        : results[index] === false
                        ? 'bg-rose-500 ping-once'
                        : 'bg-[var(--btn)]'
                    } `}
                  ></span>
                </li>
              ))}
            </ul>
          </header>
          {!ended ? (
            <QuizItem
              clickCounter={handleClick}
              question={quizes[questionIndex]} 
            />
          ) : (
            <Complete results={results} />
          )}
          <button
            className='bg-[--btn] transition-all hover:bg-[var(--btn-hover)] py-2 px-8 rounded-lg mt-5'
            onClick={newQuiz}
          >
            {' '}
            back to menu
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
