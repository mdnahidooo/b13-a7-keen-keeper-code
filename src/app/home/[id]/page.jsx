import CallToggleButton from '@/components/AllToggleButton/CallToggleButton';
import MeetToggleButton from '@/components/AllToggleButton/MeetToggleButton';
import MessageToggleButton from '@/components/AllToggleButton/MessageToggleButton';
import Image from 'next/image';
import React from 'react';
import { PiArchiveBold } from 'react-icons/pi';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';


export async function generateMetadata({ params }) {
    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();
    // console.log(friends, 'from friend details card');

    const { id } = await params;
    // console.log(id, 'from params');

    const friend = friends.find((friend) => friend.id == id);
    console.log(friend);

    if (!friend) {
        return {
            title: `Not found - KeenKeeper`,
        };
    }

    return {
        title: `${friend.name} - KeenKeeper`,
        description: friend.bio,
    };
}

const FriendDetailPage = async ({ params }) => {

    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();
    // console.log(friends, 'from friend details card');

    const { id } = await params;
    // console.log(id, 'from params');

    const friend = friends.find((friend) => friend.id == id);
    console.log(friend);

    if (!friend) {
        return (
            <h2 className="text-center mt-10 text-red-500">
                Friend not found
            </h2>
        );
    };

    const {
        name,
        picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date,
    } = friend;

    const statusStyles = {
        "Overdue": "bg-red-900 text-white",
        "Almost Due": "bg-yellow-500 text-white",
        "On-Track": "bg-green-900 text-white",
    };

    return (
        <div className="w-10/12 mx-auto my-10">

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* LEFT SIDE (1 column) */}
                <div className="lg:col-span-1 space-y-4">

                    {/* PROFILE CARD */}
                    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">

                        {/* IMAGE */}
                        <div className="relative w-20 h-20 mx-auto">
                            <Image
                                src={picture}
                                alt={name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>

                        {/* NAME */}
                        <h2 className="mt-3 text-lg font-semibold text-gray-800">
                            {name}
                        </h2>

                        {/* DAYS */}
                        <p className="text-sm text-gray-500 mt-1">
                            {days_since_contact} days ago
                        </p>

                        {/* TAGS */}
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-[#CBFADB] text-green-900 font-semibold px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* STATUS */}
                        <div className="mt-4">
                            <span
                                className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[status]}`}
                            >
                                {status}
                            </span>
                        </div>

                        {/* BIO */}
                        <div className="text-gray-400 mt-3 text-sm">
                            <p>{bio}</p>
                            <p className="mt-1">Preferred: {email}</p>
                        </div>

                    </div>

                    {/* ACTION BUTTONS */}
                    <button className="btn bg-white w-full"><RiNotificationSnoozeLine /> Snooze 2 weeks</button>
                    <button className="btn bg-white w-full"><PiArchiveBold /> Archive</button>
                    <button className="btn bg-white w-full text-red-500"><RiDeleteBinLine /> Delete</button>

                </div>

                {/* RIGHT SIDE (3 columns) */}
                <div className="lg:col-span-3 space-y-12">

                    {/* STATS CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                            <h2 className="text-3xl font-bold text-[#244D3F]">
                                {days_since_contact}
                            </h2>
                            <p className="text-gray-600 mt-2">Days Since Contact</p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                            <h2 className="text-3xl font-bold text-[#244D3F]">
                                {goal}
                            </h2>
                            <p className="text-gray-600 mt-2">Goal (Days)</p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                            <h2 className="text-3xl font-bold text-[#244D3F]">
                                {next_due_date}
                            </h2>
                            <p className="text-gray-600 mt-2">Next Due</p>
                        </div>

                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">Relationship Goal</p>
                            <button className="btn btn-sm">Edit</button>
                        </div>
                        <p className="text-gray-400 mt-2">
                            Connect every <span className="font-bold text-black">30 days</span>
                        </p>
                    </div>

                    {/* QUICK CHECK-IN */}
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <h2 className="font-semibold mb-4">Quick Check-In</h2>

                        <div className="grid grid-cols-3 gap-4">
                            <CallToggleButton friend={friend}></CallToggleButton>
                            <MessageToggleButton friend={friend}></MessageToggleButton>
                            <MeetToggleButton friend={friend}></MeetToggleButton>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendDetailPage;