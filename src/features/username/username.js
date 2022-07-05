import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeName,
    selectUsername
} from './usernameSlice.js';

export function UserName() {
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();
    // const [funnyName, setFunnyName] = useState(username);



    return (
        <div>
            <h3>{username}</h3>
            <input type='textbox' onChange={(e) => dispatch(changeName(e.target.value))}/>
            <p>hi</p>
        </div>
    )
}