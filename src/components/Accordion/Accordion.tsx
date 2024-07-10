import React from "react";


export type ItemType = {
    title: string;
    id: string;
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    callback: (id: string) => void
}

export function Accordion({titleValue, collapsed, onChange, items, callback}: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={titleValue} onClick={onChange}/>
            {!collapsed && <AccordionBody items={items} onClick={callback}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (id: string) => void
}

function AccordionBody({items, onClick}: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {items.map((item) => <li key={item.id} onClick={() => onClick(item.id)}>{item.title}</li>)}
        </ul>
    )
}