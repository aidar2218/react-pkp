import type {Meta, StoryObj} from '@storybook/react';
import {Clock} from "./Clock";

const meta: Meta<typeof Clock> = {
    component: Clock,
    title: 'Clock',
};

export default meta;

type Story = StoryObj<typeof Clock>;

export const BaseAnalogExample = () => {
    return (
        <Clock mode={"analog"}/>
    )
}

export const BaseDigitalExample = () => {
    return (
        <Clock mode={"digital"}/>
    )
}