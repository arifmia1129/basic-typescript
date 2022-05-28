import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name: string,
    age: number
}


const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);
    const handleIncrease = (): void => {
        setCount(count + 1);
    }
    const handleUser = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            name: "Arif",
            age: 18
        }
        setUser(user);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;