import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    collapseCallback: () => void
}

export function Accordion({titleValue, collapsed, collapseCallback}: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={titleValue} onClick={collapseCallback}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle({title, onClick}: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={onClick}>{title}</h3>
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