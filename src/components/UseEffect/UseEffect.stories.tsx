import type {Meta, StoryObj} from '@storybook/react';
import {SetIntervalUseEffect, SetTimeoutUseEffect, UseEffectComponent} from "./UseEffect";
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

export const SetTimeoutExample = () => {
    return <SetTimeoutUseEffect />
}

export const SetIntervalExample = () => {
    return <SetIntervalUseEffect />
}