import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (par) => {
        setCount(count + par);
    }

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => handleClick(1)}>Increment +1</button>
            <button onClick={() => handleClick(-1)}>Decrement -1</button>
            <button onClick={() => handleClick(10)}>Increment +10</button>
            <button onClick={() => handleClick(-10)}>Decrement -10</button>
        </>
    );
}

export default Counter;