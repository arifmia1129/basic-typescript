import React, { FC } from 'react';
import UserModel from '../model/UserModel';

interface UserInfo {
    user: UserModel,
    handleMember: (user: UserModel) => void;
}


const User: FC<UserInfo> = ({ user, handleMember }) => {
    return (
        <div>
            <p>User name: {user.name}</p>
            <p>User email: {user.email}</p>
            <button onClick={() => handleMember(user)}>Add To Team</button>
        </div>
    );
};

export default User;