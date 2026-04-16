"use client";

import { FriendContext } from "@/context/FriendContext";
import React, { useContext, useState } from "react";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiArrowDropDownLine, RiMessage2Line } from "react-icons/ri";
import { TbBrandZoom } from "react-icons/tb";

const TimeLinePage = () => {
    const { calls, messages, meets } = useContext(FriendContext);

    // for filter
    const [filter, setFilter] = useState("all");

    // combined data here
    const allData = [
        ...calls.map((item) => ({ ...item, type: "call" })),
        ...messages.map((item) => ({ ...item, type: "message" })),
        ...meets.map((item) => ({ ...item, type: "meet" })),
    ];

    // ✅ SORT (LATEST FIRST)
    const sortedData = [...allData].sort(
        (a, b) =>
            new Date(b.interaction_date || 0) -
            new Date(a.interaction_date || 0)
    );

    // FILTER LOGIC
    const filteredData =
        filter === "all"
            ? sortedData
            : sortedData.filter((item) => item.type === filter);

    // EMPTY STATE
    const isEmpty = allData.length === 0;

    return (
        <div className="bg-gray-50">
            <div className="w-10/12 mx-auto my-10">

                {/* TITLE */}
                <h2 className="text-3xl font-bold mb-5">Timeline</h2>

                {/* DROPDOWN */}
                <div className="mb-6 flex justify-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-sm w-60">
                            <div className="flex items-center justify-between w-full">
                                <span>
                                    Filter Timeline: {filter === "all" ? "All" : filter}
                                </span>
                                <RiArrowDropDownLine className="text-xl" />
                            </div>
                        </label>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box w-60 p-2 shadow"
                        >
                            <li><button onClick={() => setFilter("all")}>All</button></li>
                            <li><button onClick={() => setFilter("call")}>Calls</button></li>
                            <li><button onClick={() => setFilter("message")}>Messages</button></li>
                            <li><button onClick={() => setFilter("meet")}>Meets</button></li>
                        </ul>
                    </div>
                </div>

                {/* EMPTY */}
                {isEmpty ? (
                    <div className="bg-white shadow-md rounded-xl p-10 text-center">
                        <h2 className="text-2xl font-bold text-gray-700">
                            No interactions yet
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Start calling, messaging, or meeting your friends 🚀
                        </p>
                    </div>
                ) : (
                    <div>
                        {filteredData.length === 0 ? (
                            <div className="bg-white shadow-md rounded-xl p-10 text-center">
                                <h2 className="text-xl font-bold text-gray-600">
                                    No {filter} found
                                </h2>
                            </div>
                        ) : (
                            filteredData.map((item, index) => (
                                <div key={index} className="mb-4">

                                    <ul className="list bg-base-100 rounded-box shadow-md">
                                        <li className="list-row flex items-center gap-4 p-4">

                                            {/* ICON */}
                                            <h2 className="text-3xl">
                                                {item.type === "call" && <PiPhoneCallBold />}
                                                {item.type === "message" && <RiMessage2Line />}
                                                {item.type === "meet" && <TbBrandZoom />}
                                            </h2>

                                            {/* CONTENT */}
                                            <div className="text-[#64748B]">
                                                <div>
                                                    <span className="text-lg font-bold text-black capitalize">
                                                        {item.type}
                                                    </span>{" "}
                                                    with {item.name}
                                                </div>

                                                {/* ✅ SAFE + BD DATE */}
                                                <div className="text-xs font-semibold opacity-60 flex items-center gap-1">
                                                    📅 {
                                                        item.interaction_date
                                                            ? new Date(item.interaction_date).toLocaleDateString("en-GB", {
                                                                timeZone: "Asia/Dhaka",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            })
                                                            : "No date"
                                                    }
                                                </div>
                                            </div>

                                        </li>
                                    </ul>

                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeLinePage;