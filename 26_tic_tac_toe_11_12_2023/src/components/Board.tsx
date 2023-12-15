import React from "react";
import Square from "./Square";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateWinner,
  handleClick,
  selectedSquares,
} from "../redux/gameSlice";

const Board = () => {
  const squares = useSelector(selectedSquares);
  const dispatch = useDispatch();
  const winner = calculateWinner(squares);

  const renderSquare = (index: number) => {
    return (
      <Square
        value={squares[index]}
        handleClick={() => dispatch(handleClick(index))}
      />
    );
  };

  const renderResult = (): JSX.Element | null => {
    switch (winner) {
      case "Draw":
        return <div className="result">It's a draw!</div>;
      case "O":
      case "X":
        return <div className="result">Winner: {winner}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="controls">
        {renderResult()}
        <button
          className="btn btn-success"
          onClick={() => dispatch(handleClick(-1))}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Board;