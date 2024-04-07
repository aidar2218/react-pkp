import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log("App rendering");

    const [onMode, setOnMode] = useState(true);

    const changeOnOffMode = () => {
        setOnMode(!onMode);
    }

    return (
        <div>
            <PageTitle title={"Hello World, I'm React App)"}/>
            <PageTitle title={"Users page"}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff mode={onMode} changeMode={changeOnOffMode}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle({title}: PageTitlePropsType)  {
    console.log("PageTitle rendering")
    return <h1>{title}</h1>
}

export default App;
