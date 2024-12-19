import type {Meta, StoryObj} from '@storybook/react';
import {SetIntervalUseEffect, SetTimeoutUseEffect, UseEffectComponent} from "./UseEffect";
import React, {useEffect, useState} from "react";

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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("ResetEffectExample rendering");

    useEffect(() => {
        console.log("Effect occurred: " + counter);

        return () => {
            console.log("Reset effect " + counter);
        }
    }, [counter]);

    const increase = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("");
    console.log("KeysTrackerExample rendered with " + text);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            console.log(event.key);
            setText(text + event.key);
        };

        window.addEventListener("keypress", handler);

        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text]);

    return (
        <>
            Typed text: {text}
        </>
    )
}