import React, {useState} from 'react';
import './App.css';


function App() {

    // let a = 1

    let [a, setA] = useState(1)

    const onClickHandlerOne = () => {
        setA(++a)
    }

    const onClickHandlerTwo = () => {
        setA(0)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandlerOne}>number</button>
            <button onClick={onClickHandlerTwo}>0</button>
        </div>
    )
}

export default App;
