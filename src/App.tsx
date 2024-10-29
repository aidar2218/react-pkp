import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion, ItemType} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {Clock} from "./components/Clock/Clock";

function App() {
    console.log("App rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [mode, setMode] = useState<boolean>(false);

    const takeUser = (id: string) => alert(`User with ID: ${id} was clicked`);

    const users: ItemType[] = [
        {title: "Aidar", id: "1"},
        {title: "Baizak", id: "2"},
        {title: "Azim", id: "3"},
        {title: "Agbar", id: "4"}
    ];

    const collapseCallback = () => setAccordionCollapsed(!accordionCollapsed);
    const changeMode = (value: boolean) => setMode(value);

    return (
        <div className={"App"}>
            <PageTitle title={"Hello World, I'm React App)"}/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={collapseCallback}
                       items={users}
                       callback={takeUser}/>
            <Rating value={ratingValue} callback={setRatingValue}/>
            <OnOff mode={mode} changeMode={changeMode} />

            <UncontrolledAccordion titleValue={"Uncontrolled Menu"} />
            <UncontrolledRating />
            <UncontrolledOnOff onChange={changeMode} /> {mode.toString()}

            <Clock />
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
