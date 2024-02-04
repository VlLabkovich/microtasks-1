import React from "react";
import './App.css';
import {Button} from "./components/Button";


function App() {

    const Button1 = (subscriber: string, age: number) => {
        console.log(subscriber,' - ',age)
    }

    const Button2 = (subscriber: string, age: number) => {
        console.log(subscriber,' - ',age)
    }

    const Button3 = () => {
        console.log("Im stupid button")
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1("Im Vasya", 25)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2("Im Ivan", 30)}/>
            <Button name={'Stupid button'} callBack={Button3}/>
        </div>
    );
}

export default App;
