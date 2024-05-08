import React from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering");

    // const [onMode, setOnMode] = useState(true);
    //
    // const changeOnOffMode = () => {
    //     setOnMode(!onMode);
    // }

    return (
        <div className={"App"}>
            <PageTitle title={"Hello World, I'm React App)"}/>
            {/*<PageTitle title={"Users page"}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


            {/*<OnOff />*/}

            <UncontrolledAccordion titleValue={"Uncontrolled Menu"} />
            <UncontrolledAccordion titleValue={"Uncontrolled Users"} />
            {/*<Accordion titleValue={"Controlled Menu"} collapsed={false} />*/}
            {/*<Accordion titleValue={"Controlled Users"} collapsed={false} />*/}

            <UncontrolledRating />
            {/*<Rating value={3} />*/}
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
