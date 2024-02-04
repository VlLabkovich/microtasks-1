import React from 'react';
import './App.css';


function App() {
    const myFirstSubscriber = () => {
        alert('Hello Im Vasya')
    }

    const mySecondCubscriber = () => {
        alert('Hello Im Ivan')
    }
    return (
        <div className="App">
            <button onClick={myFirstSubscriber}>MyYoutubeChannel</button>
            <button onClick={mySecondCubscriber}>MyYoutubeChannel2</button>
        </div>
    );
}

export default App;
