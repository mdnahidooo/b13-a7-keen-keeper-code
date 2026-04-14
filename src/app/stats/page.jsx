"use client"

import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

// export const metadata = {
//     title: "Stats | KeenKeeper",
//     description: "Manage and nurture your meaningful relationships easily with KeenKeeper.",
// };

const StatsPage = () => {

    const { calls, messages, meets } = useContext(FriendContext);

    const data = [
        { name: 'Calls', value: calls.length, fill: '#244D3F' },
        { name: 'Messages', value: messages.length, fill: '#7E35E1' },
        { name: 'Meets', value: meets.length, fill: '#37A163' },
        // { name: "No Activity Yet", value: 1, fill: "#C4B5FD" }, //optional
    ];

    // CHECK IF ALL ZERO
    const isAllZero =
        calls.length === 0 &&
        messages.length === 0 &&
        meets.length === 0;

    // FALLBACK DATA WHEN EVERYTHING IS ZERO
    const chartData = isAllZero
        ? [{ name: "No Data", value: 1, fill: "#C4B5FD" }]
        : data;

    return (
        <div className='bg-gray-50'>
            <section className='w-10/12 mx-auto'>
                <h2 className="font-bold text-3xl my-10">
                    Friendship Analytics
                </h2>

                <div className='my-10 shadow p-10 rounded-md border bg-white border-slate-300'>

                    <h2 className='font-semibold text-xl'>By Interaction Type</h2>
                    <PieChart style={{ width: '50%', maxWidth: '500px', maxHeight: '50vh', margin: "auto", aspectRatio: 1 }} responsive>
                        <Pie
                            data={chartData}
                            innerRadius="40%"
                            outerRadius="50%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
            </section>
        </div>
    );
};

export default StatsPage;