import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {
// UseState используется для локальных задач

    let [message, setMessage] = useState(
        [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className='root'>

            {/*<FullInput addMessage={addMessage}/>*/}

            <div className='input_btn'>
                <Input setTitle={setTitle} title={title}/>
                <Button name='+' callBack={callBackButtonHandler}/>
            </div>


            {message.map((item, index) => {
                return (
                    <li key={index}>{item.message}</li>
                )
            })}
        </div>
    );
}

export default App;
