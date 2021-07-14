import logo from './logo.svg';
import './App.css';
import {RecycleBin} from "./components/recycleBin/RecycleBin";
import React from "react";

function App() {
    return (
        <div className="App">
            <RecycleBin/>
            <Header/>
            <Slider/>
            <AboutCracker/>
            <CrackerConstructor/>
            <Footer/>
        </>
</div>
);
}

export default App;
