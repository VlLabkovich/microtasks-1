import React from 'react';
import './App.css';
import {TopCars, topCars} from "./components/TopCars";
import {Practice, students} from "./components/Practice";


function App() {
    return (
        <>
            <Practice students1={students}/>
            <TopCars topcars1={topCars}/>
        </>

    );
}

export default App;
