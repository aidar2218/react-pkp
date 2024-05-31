import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';
import {useState} from "react";

const meta: Meta<typeof OnOff> = {
    component: OnOff,
    title: 'OnOff',
};

export default meta;

type Story = StoryObj<typeof OnOff>;

const onClickHandler = action("Mode changed")

export const DefaultOnOff: Story = {
    args: {
        mode: true,
        changeMode: onClickHandler
    }
}

export const OnMode = () => <OnOff mode={true} changeMode={onClickHandler} />
export const OffMode = () => <OnOff mode={false} changeMode={onClickHandler} />

export const ModeChanging = () => {

    const [mode, setMode] = useState<boolean>(false);

    const changeMode = (value: boolean) => setMode(value);

    return <OnOff mode={mode} changeMode={changeMode} />
}

