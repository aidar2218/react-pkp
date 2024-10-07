import type {Meta, StoryObj} from '@storybook/react';
import {UseStateComponent} from "./UseState";
import React from "react";

const meta: Meta<typeof UseStateComponent> = {
    component: UseStateComponent,
    title: 'useState demonstration',
};

export default meta;

type Story = StoryObj<typeof UseStateComponent>;

export const Example1 = () => {
    return <UseStateComponent />
}