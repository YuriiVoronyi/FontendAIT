import React from "react";
import "./Sandwich.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/storeRTK";
import { addIngredient, clear } from "../../redux/sandwich/sandwichSlice";

const SandwichRTK = () => {
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );
  const dispatch = useDispatch();

  const handleAddBread = (): void => {
    dispatch(addIngredient("bread"));
  };
  const handleAddCheese = (): void => {
    dispatch(addIngredient("cheese"));
  };
  const handleAddSalami = (): void => {
    dispatch(addIngredient("salami"));
  };
  const handleDelete = (): void => {
    dispatch(clear());
  };

  return (
    <div className="container">
      <h1 className="title">Choose your sandwich:</h1>
      <p className="ingredients">Sandwich: {ingredients}</p>
      <button className="btn btn-success btnReg" onClick={handleAddBread}>
        Add bread
      </button>
      <button className="btn btn-success btnReg" onClick={handleAddCheese}>
        Add cheese
      </button>
      <button className="btn btn-success btnReg" onClick={handleAddSalami}>
        Add salami
      </button>
      <div>
        <button className="btn btn-danger btnDel" onClick={handleDelete}>
          Delete all ingredients
        </button>
      </div>
    </div>
  );
};

export default SandwichRTK;