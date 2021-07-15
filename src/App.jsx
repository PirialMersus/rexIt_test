import './App.css';
import {RecycleBin} from "./components/RecycleBin/RecycleBin";
import React from "react";
import {Header} from "./components/Header/Header";
import {Slider} from "./components/Slider/Slider";
import {AboutCracker} from "./components/AboutCracker/AboutCracker";
import {CrackerConstructor} from "./components/CrackerConstructor/CrackerConstructor";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <RecycleBin/>
            <Header/>
            <Slider/>
            <AboutCracker/>
            <CrackerConstructor/>
            <Footer/>
        </div>
    );
}

export default App;
