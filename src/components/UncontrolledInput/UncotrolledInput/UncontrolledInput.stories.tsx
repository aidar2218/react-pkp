import type {Meta} from '@storybook/react';
import {UncontrolledInput} from './UncontrolledInput';
import {ChangeEvent, useRef, useState} from "react";

const meta: Meta<typeof UncontrolledInput> = {
    component: UncontrolledInput,
    title: 'UncontrolledInput',
};

export default meta;

export const UncontrolledInput2 = () => <UncontrolledInput />;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    };

    return (
        <>
            <input onChange={onChangeHandler} />
            - {value}
        </>
    )
}

export const GetValueOfUncontrolledInputOnButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const saveValue = () => {
        const element = inputRef.current as HTMLInputElement;
        setValue(element.value);
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={saveValue} >save</button> - actual value: {value}
        </>
    )
}