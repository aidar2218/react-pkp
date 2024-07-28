import type {Meta} from '@storybook/react';
import {Select} from './Select';
import {useState} from "react";

const meta: Meta<typeof Select> = {
    component: Select,
    title: 'Select',
};

export default meta;

export const WithValue = () => {
    const [value, setValue] = useState("2");

    return (
        <Select value={value} onChange={setValue} items={[
            {id: "1", title: "Bishkek"},
            {id: "2", title: "Astana"},
            {id: "3", title: "Tashkent"},
        ]}/>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return (
        <Select onChange={setValue}
                value={value}
                items={[
            {id: "1", title: "Bishkek"},
            {id: "2", title: "Astana"},
            {id: "3", title: "Tashkent"},
        ]}/>
    )
}
