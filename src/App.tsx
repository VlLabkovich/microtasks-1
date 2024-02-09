import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";


function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Euros', value: 210, number: ' v12323590940'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Euros', value: 550, number: ' v123233323540'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Euros', value: 850, number: ' v12323333540'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Euros', value: 250, number: ' v1232399540'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Euros', value: 50, number: ' v1232356740'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Euros', value: 450, number: ' v123253540'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filterMoney, setFilterMoney] = useState('All')

    const filterMoneyFoo = (nameBtn: string) => {
        setFilterMoney(nameBtn)
    }

debugger

    const filteredMoneyFoo = () => {

        switch (filterMoney) {
            case'Dollars': {
                return money.filter(el => el.banknots === 'Dollars')
            }
            case'RUBLS': {
                return money.filter(el => el.banknots === 'RUBLS')
            }
            case'Euros': {
                return money.filter(el => el.banknots === 'Euros')
            }
        }
        return money
    }



    return (
        <>
            <ul>
                {filteredMoneyFoo().map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <Button name={'All'} callBack={() => filterMoneyFoo('All')}/>
            <Button name={'Dollar'} callBack={() => filterMoneyFoo('Dollars')}/>
            <Button name={'Ruble'} callBack={() => filterMoneyFoo('RUBLS')}/>
            <Button name={'Euro'} callBack={() => filterMoneyFoo('Euros')}/>
        </>
    )

}

export default App;
