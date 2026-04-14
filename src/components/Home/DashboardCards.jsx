import React from "react";

const DashboardCards = ({friends}) => {
    const totalFriends = friends.length;

    const onTrack = friends.filter(
        (f) => f.status === "On-Track"
    ).length;

    const needAttention = friends.filter(
        (f) => f.status === "Overdue" || f.status === "Almost Due"
    ).length;

    // interactions in last 30 days
    const interactionsThisMonth = friends.filter(
        (f) => f.days_since_contact <= 30
    ).length;

    // ✅ CARD DATA
    const cards = [
        { title: "Total Friends", value: totalFriends },
        { title: "On Track", value: onTrack },
        { title: "Need Attention", value: needAttention },
        { title: "Interactions This Month", value: interactionsThisMonth },
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