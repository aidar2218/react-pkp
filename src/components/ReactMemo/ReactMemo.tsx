import React from 'react';

type ReactMemoPropsType = {
    count: number
    setCount: (count: number) => void
    users: string[]
    setUsers: (users: string[]) => void
}

const ReactMemo = ({count, users, setCount, setUsers}: ReactMemoPropsType) => {

    console.log("ReactMemo rendering");

    return (
        <div>
            <Count count={count} setCount={setCount}/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export const ReactMemoContainer = React.memo(ReactMemo);

const CountInvisible = (props: {
    count: number,
    setCount: (count: number) => void}) => {

    console.log("Counter rendering");

    return (
        <div>
            {props.count}
            <button onClick={() => props.setCount(props.count + 1)}>+</button>
        </div>
    )
}

const Count = React.memo(CountInvisible)

const UsersInvisible = (props: {
    users: string[],
    setUsers: (users: string[]) => void}) => {

    console.log("Users rendering");

    return <div>
        <button onClick={() => props.setUsers([...props.users, "new user"])}>add user</button>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}

const Users = React.memo(UsersInvisible)