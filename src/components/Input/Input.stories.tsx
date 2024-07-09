import type {Meta} from '@storybook/react';
import {Input} from './Input';
import {ChangeEvent, useRef, useState} from "react";

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Input',
};

export default meta;

export const UncontrolledInput = () => <Input />;

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return <input type="text" value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    }

    return <input type="checkbox" checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<undefined | string>("1");
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value="1">Bishkek</option>
            <option value="2">Astana</option>
            <option value="3">Tashkent</option>
        </select>
    )
}