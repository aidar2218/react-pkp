import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log("App rendering")
    return (
        <div>
            {/*<PageTitle title={"Hello World, I'm React App)"}/>
            <PageTitle title={"Users page"}/>*/}
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
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
