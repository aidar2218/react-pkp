import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Accordion, ItemType} from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    title: 'Accordion',
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const onChangeHandler = action("onChange was clicked");

const users: ItemType[] = [
    {title: "Aidar", id: "1"},
    {title: "Baizak", id: "2"},
    {title: "Azim", id: "3"},
    {title: "Agbar", id: "4"}
];

const takeUser = (id: string) => alert(`User with ID: ${id} was clicked`);



export const FirstTestAccordion: Story = {
    args: {
        titleValue: "Simple Accordion",
        collapsed: false,
        onChange: onChangeHandler,
        items: users,
        callback: takeUser
    }
}

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue={"Collapse"}
                   collapsed={true}
                   onChange={onChangeHandler}
                   items={users}
                   callback={takeUser}
        />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion titleValue={"Open"}
                   collapsed={false}
                   onChange={onChangeHandler}
                   items={users}
                   callback={takeUser}
        />
    )
}

export const DemoAccordion = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion titleValue={"Demo"}
                   collapsed={collapsed}
                   onChange={() => {setCollapsed(!collapsed)}}
                   items={users}
                   callback={takeUser}
        />
    )
}