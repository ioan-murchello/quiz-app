import study from '../assets/studying.svg';
import doneviolet from '../assets/done_violet.svg';
import wrong_smaller from '../assets/wrong_smaller.svg';

const Complete = ({ correct, results }) => {
  const ok = results.filter((el) => el === true);
  const wrong = results.filter((el) => el === false);
  let str = '';
  if (ok.length === results.length) {
    str = 'Perfect!';
  } else if (ok.length > 15 && ok.length < results.length) {
    str = 'Great job!';
  } else if (ok.length > 10 && ok.length <= 15) {
    str = 'Good, but you still need more practice...';
  } else if (ok.length > 5 && ok.length <= 10) {
    str = 'Not bad, not bad, but you need practice every day';
  } else {
    str = "It's okay for a beginner";
  }
  return (
    <div className='flex flex-col items-center  justify-center gap-5 text-xl'>
      <h3>Quiz complete</h3>
      <img className='w-16 h-16 sm:w-20 sm:h-20' src={study} alt='compolete' />
      <div className='flex items-center gap-x-2'>
        <p>Correct: {ok.length} </p>
        <img className='w-10 h-10' src={doneviolet} alt='done' />
      </div>
      <div className='flex items-center gap-x-2'>
        <p>Uncorrect: {wrong.length} </p>
        <img className='w-8 h-8' src={wrong_smaller} alt='wrong' />
      </div>

      <p>{str}</p>
    </div>
  );
};
export default Complete;
