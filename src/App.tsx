import React, {MouseEvent} from "react";
import './App.css';


function App() {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     alert('Hello Im Vasya')
    // }
    //
    // const mySecondCubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     alert('Hello Im Ivan')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (num: number) => {
        console.log(num)
    }

    return (
        <div className="App">
            {/*<button onClick={(event) => {console.log("Hello")}}>MyYoutubeChannel-1</button>*/}
            {/*<button onClick={myFirstSubscriber}>MyYoutubeChannel-1></button>*/}

            {/*<button onClick={(event: MouseEvent<HTMLButtonElement> ) => onClickHandler("VASYA")}>MyYoutubeChannel-l</button>*/}
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement> ) => onClickHandler("IVAN")}>MyYoutubeChannel-2</button>*/}
            {/*<button onClick={() => onClickHandler("some info")}>MyYoutubeChannel-3</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>
        </div>
    );
}

export default App;
