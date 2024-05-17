import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log("App rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [mode, setMode] = useState<boolean>(false);

    const collapseCallback = () => setAccordionCollapsed(!accordionCollapsed);
    const changeMode = (value: boolean) => setMode(value);

    return (
        <div className={"App"}>
            <PageTitle title={"Hello World, I'm React App)"}/>

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} collapseCallback={collapseCallback} />
            <Rating value={ratingValue} callback={setRatingValue}/>
            <OnOff mode={mode} changeMode={changeMode} />

            <UncontrolledAccordion titleValue={"Uncontrolled Menu"} />
            <UncontrolledRating />
            <UncontrolledOnOff />
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
