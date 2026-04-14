"use client"
import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import { TbBrandZoom } from 'react-icons/tb';
import { toast } from 'react-toastify';

const MeetToggleButton = ({ friend }) => {

    const { meets, setMeets } = useContext(FriendContext);
    // console.log(meets, setMeets, "something from context");

    const handleMeetToggle = () => {
        console.log("handle call toggle button");
        setMeets([...meets, friend])

        toast.success(`🎥 ${friend.name} get a Zoom meeting invite!`, {
            position: "top-center",
        });
    };

    return (
        <div>
            <button onClick={handleMeetToggle} className="btn w-full flex flex-col py-10 font-bold"> <h2 className='text-3xl'><TbBrandZoom /></h2> Meet</button>
        </div>
    );
};

export default MeetToggleButton;