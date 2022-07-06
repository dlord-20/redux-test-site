import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeName,
    selectUsername
} from './usernameSlice.js';

export function UserName() {
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();
    // const [funnyName, setFunnyName] = useState(username);

    useEffect(() => {
        const interval = setInterval(() => {
            const randNum = getRandomNumber(username.length - 1);
            const randLetter = getRandomLetter();
            console.log(username);
            dispatch(changeName(changeCharacter(username, randNum, randLetter)));
            // console.log(username);
        }, 3000)

        return () => { clearInterval(interval)};
    }, [])

    const handleChange = (e) => {
        // console.log('hi');
        dispatch(changeName(e.target.value));
    }

    const getRandomNumber = (length) => {
        return Math.floor(Math.random() * length);
    }

    const getRandomLetter = () => {
        const letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const index = getRandomNumber(letters.length - 1);
        return letters[index];
    }

    const changeCharacter = (str, index, chr) => {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }

    return (
        <div>
            <h3>{username}</h3>
            <input type='textbox' onChange={handleChange}/>
            <p>hi</p>
        </div>
    )
}