import { useEffect, useState } from 'react';

const QuizItem = ({ question, clickCounter, setCorrectAnswers }) => {
  const [correct, setCorrect] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const whriteAnswer = question.correctAnswer;
  const truthyAnswer = whriteAnswer === correct;

  const checkAnswer = (answer) => {
    const isCorrect = whriteAnswer === answer;

    setCorrect(answer);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      setTimeout(() => clickCounter(isCorrect), 1000);
    } else {
      setTimeout(() => setShowCorrectAnswer(true), 1000);
      setTimeout(() => clickCounter(isCorrect), 2500);
    }
    setIsClicked(true);
  };

  useEffect(() => {
    setIsClicked(false);
    setCorrect(null);
    setShowCorrectAnswer(false);
  }, [question]);

  return (
    <article className='w-full border rounded-md p-5 shadow-md'>
      <h1 className='text-xl sm:text-3xl p-4'>{question.question}</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-2 pt-3'>
        {Array.from(Object.entries(question.answers)).map(([key, value]) => {
          const w = value.split(' ');
          return (
            <li
              onClick={() => {
                if (isClicked) return;
                checkAnswer(key);
              }}
              key={key}
              className={
                'text-lg sm:text-xl cursor-pointer rounded-md  sm:hover:bg-[var(--item-hover)]'
              }
            >
              <div
                className='flex gap-x-1 flex-wrap break-all justify-center items-center text-lg sm:text-xl cursor-pointer rounded-md border p-2 sm:p-4 '
                style={{
                  backgroundColor:
                    truthyAnswer && key === whriteAnswer
                      ? 'var(--item-bg-correct)'
                      : correct !== whriteAnswer && key === correct
                      ? 'var(--item-bg-incorrect)'
                      : showCorrectAnswer && key === whriteAnswer
                      ? 'var(--item-bg-correct)'
                      : 'var(--item-bg)',
                }}
              >
                {w.map((el, i) => {
                  return <span key={i}>{el} </span>;
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
export default QuizItem;
