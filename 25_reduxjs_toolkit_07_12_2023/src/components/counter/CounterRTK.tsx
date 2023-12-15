import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/storeRTK";
import { decrement, increment } from "../../redux/counter/counterSlice";

const Counter: React.FC = (): JSX.Element => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleMinus10 = () => {
    dispatch(decrement(10))
    // dispatch({ type: "counter/minus", payload: 10 });
  };

  const handleMinus = () => {
    dispatch(decrement(1))
    // dispatch({ type: "counter/minus", payload: 1 });
  };

  const handlePlus = () => {
    dispatch(increment(1))
    // dispatch({ type: "counter/plus", payload: 1 });
  };

  const handlePlus10 = () => {
    dispatch(increment(10))
    // dispatch({ type: "counter/plus", payload: 10 });
  };

  const styles = {
    btn: {
      padding: '15px',
      margin: '5px',
      fontSize: '18px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '10px',
      backgroundColor: 'lightblue',
      color: 'darkgreen'
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ fontSize: '20px', marginBottom: '10px' }}>Counter: {counter} </div>
      <button style={styles.btn} onClick={handleMinus10}>Minus10</button>
      <button style={styles.btn} onClick={handleMinus}>Minus</button>
      <button style={styles.btn} onClick={handlePlus}>Plus</button>
      <button style={styles.btn} onClick={handlePlus10}>Plus10</button>
    </div>
  );
};

export default Counter;