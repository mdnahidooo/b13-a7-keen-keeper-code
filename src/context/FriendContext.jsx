'use client'
import React, { createContext, useState } from 'react';


export const FriendContext =createContext()

const FriendProvider = ({children}) => {
    const [calls, setCalls] = useState([]);
    const [messages, setMessages] = useState([]);
    const [meets, setMeets] = useState([]);

    const data = {
        calls,
        setCalls,
        messages,
        setMessages,
        meets,
        setMeets
    }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;