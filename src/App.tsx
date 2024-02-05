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


    let currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble') // Результат фильтрации передается в метод мап

    console.log(currentMoney)

    return (
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
    );
}

export default App;
