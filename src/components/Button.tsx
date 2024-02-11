import React from 'react';

type BtnType = {
    name: string
    callBack: () => void
}

export const Button = (props: BtnType) => {

    const onClickHandlerBtn = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandlerBtn}>{props.name}</button>
        </div>
    );
};