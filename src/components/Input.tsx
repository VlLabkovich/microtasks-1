import React, {ChangeEvent} from 'react';

type InputType = {
    setTitle: (title: string) => void
    title: string
}

export const Input = (props: InputType) => {

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.title} onChange={onChangeInput}/>
        </div>
    );
};