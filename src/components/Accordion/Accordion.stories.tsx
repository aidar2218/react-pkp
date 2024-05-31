import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    title: 'Accordion',
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const onChangeHandler = action("onChange was clicked")

export const FirstTestAccordion: Story = {
    args: {
        titleValue: "Simple Accordion",
        collapsed: false,
        onChange: onChangeHandler
    }
}



export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue={"Collapse"}
                   collapsed={true}
                   onChange={onChangeHandler}
        />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion titleValue={"Open"}
                   collapsed={false}
                   onChange={onChangeHandler}
        />
    )
}

export const DemoAccordion = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion titleValue={"Demo"}
                   collapsed={collapsed}
                   onChange={() => {setCollapsed(!collapsed)}}
        />
    )
}