import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";


function App() {
// UseState используется для локальных задач

    let [message, setMessage] = useState(

        [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div className='root'>

            <FullInput addMessage={addMessage}/>

            {message.map((item, index) => {
                return (
                    <li key={index}>{item.message}</li>
                )
            })}
        </div>
    );
}

export default App;
