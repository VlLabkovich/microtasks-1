import React, {ChangeEvent, useState} from 'react';


type FullInputTypeProps = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputTypeProps) => {

    let [title, setTitle] = useState('')
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInput}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

