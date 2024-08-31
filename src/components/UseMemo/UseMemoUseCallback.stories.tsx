import type {Meta, StoryObj} from '@storybook/react';
import {UseMemo} from "./UseMemo";
import React, {useMemo, useState} from "react";

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


export const UseCallbackBehavior = () => {
    console.log("UseCallbackBehavior rendering");
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JavaScript", "HTML/CSS", "Redux"]);

    const addBook = () => {
        const newBooks = [...books, "Angular" + new Date().getTime()];
        setBooks(newBooks);
    }

    const memoizedAddBook = useMemo(() => {
        return addBook;
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}

type InvisibleBooksPropsType = {
    addBook: () => void
}

const InvisibleBooks = (props: InvisibleBooksPropsType) => {
    console.log("InvisibleBooks rendering");
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Books = React.memo(InvisibleBooks);