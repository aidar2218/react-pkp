import type {Meta, StoryObj} from '@storybook/react';
import {UseEffectComponent} from "./UseEffect";
import React from "react";

const meta: Meta<typeof UseEffectComponent> = {
    component: UseEffectComponent,
    title: 'useEffect demonstration',
};

export default meta;

type Story = StoryObj<typeof UseEffectComponent>;

export const UseEffectDemo = () => {
    return <UseEffectComponent />
}