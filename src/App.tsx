import React, {useState} from 'react';
import './App.css';


function App() {

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'z1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'w1234567890'},
        {banknote: 'dollar', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'c1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'r1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'x1234567890'},
        {banknote: 'ruble', nominal: 50, number: 'v1234567890'},
    ])


    const [filter, setFilter] = useState("all")


    let currentMoney = money
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble')
    }


    const onclickFilterHandler = (nameButton: string) => {
    setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknote}</span>
                            <span>{item.nominal}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => onclickFilterHandler('all')}>All</button>
            <button onClick={() => onclickFilterHandler('dollar')}>Dollar</button>
            <button onClick={() => onclickFilterHandler('ruble')}>Ruble</button>
        </>
    );
}

export default App;
