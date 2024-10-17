import { Component, useState } from 'react';
import classes from './Counter.module.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import useTwoWayBinding from '../hooks/useTwoWayBinding';
import { counterAction } from '../store';

const Counter = () => {

  const counter = useSelector(({ counter }) => counter)
  const show = useSelector(({ showCounter }) => showCounter)
  const dispatch = useDispatch()
  const { val: amount,
    onChangeVal: onChangeAmount
  } = useTwoWayBinding('')

  function incrementHandler() {
    dispatch(counterAction.increment())
  }
  function increaseBy() {
    dispatch(counterAction.increase(Number(amount)))
  }
  function decrementHandler() {
    dispatch(counterAction.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Incremet</button>
      </div>
      <div>
        {/* <button onClick={decrementHandler}>Decrement</button> */}
        <input value={amount} onChange={onChangeAmount} />
        <button onClick={increaseBy}>Increse</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class CounterClass extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }
//   decrementHandler() {
//     this.props.decrement()
//   }
//   toggleCounterHandler() { }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementHandler.bind(this)}>Incremet</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
