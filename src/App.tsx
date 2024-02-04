import React from "react";
import './App.css';
import {Button} from "./components/Button";


function App() {

    const ButtonFoo1 = () => {
        console.log("Im Vasya")
    }

    const ButtonFoo2 = () => {
        console.log("Im Ivan")
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChannel-1'} callBack={ButtonFoo1}/>
            <Button name={'MyYouTubeChannel-2'} callBack={ButtonFoo2}/>
        </div>
    );
}

export default App;
