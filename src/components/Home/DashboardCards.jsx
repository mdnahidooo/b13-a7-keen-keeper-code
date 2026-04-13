import React from "react";

const DashboardCards = () => {
    const cards = [
        { title: "Total Friends", value: 10 },
        { title: "On Track", value: 4 },
        { title: "Need Attention", value: 2 },
        { title: "Interactions This Month", value: 1 },
    ];

    return (
        <div className="pt-10 w-full">
            

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
                    >
                        <h2 className="text-3xl font-bold text-[#244D3F]">
                            {card.value}
                        </h2>
                        <p className="text-gray-600 mt-2">{card.title}</p>
                    </div>
                ))}

            </div>


            <div className="border-t border-gray-300/60 my-8"></div>

        </div>
    );
};

export default DashboardCards;