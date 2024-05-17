import React, {useState} from "react";


type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion({titleValue}: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering");

    const [collapsed, setCollapsed] = useState(false);

    const bodyCollapse = () => setCollapsed(!collapsed)

    return (
        <div>
            <AccordionTitle title={titleValue} onClick={bodyCollapse}/>
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