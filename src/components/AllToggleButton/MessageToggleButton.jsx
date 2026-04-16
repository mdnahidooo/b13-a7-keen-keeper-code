"use client"
import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import { RiMessage2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const MessageToggleButton = ({ friend }) => {

    const { messages, setMessages } = useContext(FriendContext);
    // console.log(messages, setMessages, "something from context");

    const handleMessageToggle = () => {
        const newMessage = {
            ...friend,
            interaction_date: new Date().toISOString(),
        };
        setMessages([...messages, newMessage]);

        toast.success(`💬 Message sent to ${friend.name}!`, {
            position: "top-center",
        });
    };

    return (
        <div>
            <button onClick={handleMessageToggle} className="btn w-full flex flex-col py-10 font-bold"> <h2 className='text-3xl'><RiMessage2Line /></h2> Message</button>
        </div>
    );
};

export default MessageToggleButton;