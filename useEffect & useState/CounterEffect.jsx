import { useEffect, useState } from 'react';

const CounterEffect = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("Count incremented!");
    }, [count]);

    return (
        <div>
            CounterEffect working!
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click to Increment!</button>
        </div>
    );
};

export default CounterEffect;