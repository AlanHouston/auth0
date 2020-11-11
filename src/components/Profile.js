import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div id='profileOuter'>
                <img src={user.picture} />
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </div>
        )
    )
}

export default Profile;
