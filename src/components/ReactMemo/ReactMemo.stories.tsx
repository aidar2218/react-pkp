import type {Meta, StoryObj} from '@storybook/react';
import {ReactMemoContainer} from "./ReactMemo";
import {useState} from "react";

const meta: Meta<typeof ReactMemoContainer> = {
    component: ReactMemoContainer,
    title: 'React.memo demonstration',
};

export default meta;

type Story = StoryObj<typeof ReactMemoContainer>;

export const Example1 = () => {

    console.log("Example1 rendering");

    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<string[]>(["Aidar", "Azim", "Baizak", "Agbar"]);

    return (
        <>
            <ReactMemoContainer count={counter} setCount={setCounter} users={users} setUsers={setUsers}/>
        </>
    )
}
