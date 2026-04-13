import Image from 'next/image';
import React from 'react';

const FriendCard = ({ friend }) => {
    const { id, name, picture, days_since_contact, tags, status } = friend;

    const statusStyles = {
        "Overdue": "bg-red-900 text-white",
        "Almost Due": "bg-yellow-500 text-white",
        "On-Track": "bg-green-900 text-white",
    };

    return (
        <div>
            
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition ">

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

                {/* DAYS AGO */}
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

            </div>

        </div>
    );
};

export default FriendCard;