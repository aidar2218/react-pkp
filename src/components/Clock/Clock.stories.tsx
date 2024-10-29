import type {Meta, StoryObj} from '@storybook/react';
import {Clock} from "./Clock";

const meta: Meta<typeof Clock> = {
    component: Clock,
    title: 'Clock',
};

export default meta;

type Story = StoryObj<typeof Clock>;

export const BaseExample = () => {
    return (
        <Clock />
    )
}