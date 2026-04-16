"use client"
import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import { PiPhoneCallBold } from 'react-icons/pi';
import { toast } from 'react-toastify';

const CallToggleButton = ({ friend }) => {

    const { calls, setCalls } = useContext(FriendContext);
    // console.log(calls, setCalls, "something from context");
    
    // const handleCallToggle = () => {
    //     console.log("handle call toggle button");
    //     setCalls([...calls, friend])

    //     toast.success(`📞 Call with ${friend.name} recorded!`, {
    //         position: "top-center",
    //     });
    // };

    const handleCallToggle = () => {

        const newCall = {
            ...friend,
            interaction_date: new Date().toISOString(),
        };

        setCalls([...calls, newCall]);

        toast.success(`📞 Call with ${friend.name} recorded!`, {
            position: "top-center",
        });
    };

    return (
        <div>
            <button onClick={handleCallToggle} className="btn w-full flex flex-col py-10 font-bold"> <h2 className='text-3xl'><PiPhoneCallBold /></h2> Call</button>
        </div>
    );
};

export default CallToggleButton;