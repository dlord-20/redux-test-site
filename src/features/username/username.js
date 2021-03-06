import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeName,
    selectUsername,
    addCharacter,
    removeCharacter
} from './usernameSlice.js';
import styles from './username.css';

export function UserName() {
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();
    // const [funnyName, setFunnyName] = useState(username);

    const randomCharacterChange = () => {
        const randNum = getRandomNumber(username.length - 1);
        const randLetter = getRandomLetter();
        dispatch(changeName(changeCharacter(username, randNum, randLetter)));
    }

    // useEffect(() => {
    //     var interval = setInterval(() => {
    //         const randNum = getRandomNumber(username.length - 1);
    //         const randLetter = getRandomLetter();
    //         console.log(username);
    //         dispatch(changeName(changeCharacter(username, randNum, randLetter)));
    //         // console.log(username);
    //     }, 3000)

    //     return () => { clearInterval(interval)};
    // }, [])

    const handleChange = (e) => {
        // console.log('hi');
        dispatch(changeName(e.target.value));
    }

    const getRandomNumber = (length) => {
        return Math.floor(Math.random() * length);
    }

    const getRandomLetter = () => {
        const letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '!', '|', '@'];
        const index = getRandomNumber(letters.length);
        return letters[index];
    }

    const changeCharacter = (str, index, chr) => {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }

    const addNewCharacter = () => {
        const letter = getRandomLetter();
        dispatch(addCharacter(letter));
    }
    
    const getIndex = () => {
        return getRandomNumber(username.length);
    }

    const removeOldCharacter = () => {
        dispatch(removeCharacter(getIndex()));
    }

    const rickRoll = () => {
        const message = 'Never gonna give you up. Never gonna let you down. Never gonna run around and desert you.';
        if(username.length != message.length) {
            if(username.length > message.length) {
                //If current string is too long we want to shorter it
                removeOldCharacter();
            } else {
                //If current string is too short we want to make it longer
                addNewCharacter();
            }
        }

        //The following logic is not great. Think of another way to implement change
        const tempName = username;
        var index = 0;
        do {
            index = getRandomNumber(username.length);
            tempName = changeCharacter(tempName, index, message[index]);
            
        } while (tempName[index] != message[index]);
        dispatch(changeName(tempName));
    }

    return (
        <div className='username'>
            <h3>{username}</h3>
            <label>Change input </label>
            <input type='textbox' onChange={handleChange}/>
            <div className="test">
                <p className="buttonA" onClick={randomCharacterChange}>Change a character</p>
                <p className="buttonA" onClick={addNewCharacter}>Add Random Character</p>
                <p className="buttonA" onClick={removeOldCharacter}>Remove Random Character</p>
            </div>
            <p className="buttonA" onClick={rickRoll} >Slowly Reveal Hidden Message</p>
        </div>
    )
}