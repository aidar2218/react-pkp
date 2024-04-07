import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion({titleValue, collapsed}: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle({title}: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>{title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}