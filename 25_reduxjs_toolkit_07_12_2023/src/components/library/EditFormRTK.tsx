import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { editTitleBook } from "../../redux/book/bookSlice";

const EditFormRTK: React.FC<{ isbn: string }> = ({ isbn }): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTitleBook({ isbn, title }));
    setTitle("");
  };
  return (
      <form className="row g-3" style={{ width: '40%', margin: '0 auto' }} onSubmit={handleSubmit}>
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Edit Title
          </button>
        </div>
      </form>
  );
};

export default EditFormRTK;