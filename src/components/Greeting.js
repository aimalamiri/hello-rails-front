import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../store/message/messageSlice';

const Greeting = () => {
    const message = useSelector((state) => state.message.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMessage());
    }, []);

    return (<h1>{message.text}</h1>);
}

export default Greeting;