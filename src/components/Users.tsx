import React, { useEffect, useState } from 'react';
import UserModel from '../model/UserModel';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([])
    const [team, setTeam] = useState<UserModel[]>([])
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handleMember = (user: UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam);
    }
    return (
        <div>
            <h1>Team member : {team.length}</h1>
            <h1>Users Info</h1>

            {
                users.map(user => <User user={user} handleMember={handleMember} />)
            }
        </div>
    );
};

export default Users;