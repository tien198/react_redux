import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector(({ counter }) => counter)
  const dispatch = useDispatch()
  function incrementHandler() {
    dispatch({ type: 'increment' })
  }
  function decrementHandler() {
    dispatch({ type: 'decrement' })
  }
  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Incremet</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
