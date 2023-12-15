import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/book/bookSlice';

const CreateBookRTK = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addBook({ title, author, year }));
        setTitle('');
        setAuthor('');
        setYear('');
    }

  return (
    <div>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Create book</h1>

        <form onSubmit={handleSubmit}>
            <input
                className='form-control w-25'
                style={{ display: 'inline', margin: '0 10px' }}
                type="text"
                placeholder='title'
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <input
                className='form-control w-25'
                style={{ display: 'inline', margin: '0 10px' }}
                type="text"
                placeholder='author'
                value={author}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
            />
            <input
                className='form-control w-25'
                style={{ display: 'inline', margin: '0 10px' }}
                type="text"
                placeholder='year'
                value={year}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
            />

            <button className='btn btn-success' style={{ width: '10%', padding: '12px 10px 10px' }} type='submit'>Add Book</button>
        </form>
    </div>
  )
}

export default CreateBookRTK