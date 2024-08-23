import type {Meta, StoryObj} from '@storybook/react';
import {UseMemo} from "./UseMemo";
import React, {useMemo, useState} from "react";
import {ItemType, Select} from "../Select/Select";

const meta: Meta<typeof UseMemo> = {
    component: UseMemo,
    title: 'useMemo demonstration',
};

export default meta;

type Story = StoryObj<typeof UseMemo>;

export const DifficultCountingExample = () => {
    return <UseMemo />
}

const InvisibleUsers = (props: {users: string[]}) => {
    console.log("Users rendering");
    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}

const Users = React.memo(InvisibleUsers);

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo rendering");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Aidar", "Azim", "Baizak", "Agbar"]);

    const newUsersArray = useMemo(() => {
        return users.filter(user => user.toLowerCase().indexOf("b") > -1);
    }, [users]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newUsersArray}/>
    </>
}


