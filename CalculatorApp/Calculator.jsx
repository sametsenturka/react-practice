import { useState } from 'react';

const Calculator = () => {

    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };

    const clearInput = () => {
        setInput("");
    };

    return (
        <div className="calculator">
            <input value={input} readOnly />
            <div className="button-grid">
                {[1, 2, 3, "+"].map((val) => (
                    <button key={val} onClick={() => handleClick(val.toString())}>{val}</button>
                ))}
                {[4, 5, 6, "-"].map((val) => (
                    <button key={val} onClick={() => handleClick(val.toString())}>{val}</button>
                ))}
                {[7, 8, 9, "*"].map((val) => (
                    <button key={val} onClick={() => handleClick(val.toString())}>{val}</button>
                ))}
                <button onClick={clearInput}>C</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={calculateResult}>=</button>
            </div>
        </div>
    );
    
}

export default Calculator;