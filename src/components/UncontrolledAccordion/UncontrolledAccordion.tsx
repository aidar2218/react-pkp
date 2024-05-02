import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion({titleValue}: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering");

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={titleValue}/>
            <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
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