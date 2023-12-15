import React from 'react';
import styles from '../App.module.css';

interface ISquareProps {
    value: 'X' | 'O' | null;
    handleClick: () => void
}

const Square: React.FC<ISquareProps> = ({ value, handleClick }) => {
  return (
    <button className={`btn btn-light ${styles.square} square ${value}`} onClick={handleClick}> {value} </button>
  )
}

export default Square