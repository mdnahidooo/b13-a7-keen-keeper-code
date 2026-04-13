import React from 'react';


const HeroSection = async () => {



    return (
        <div>
            <div className="flex flex-col items-center text-center justify-center mt-20">
                <div className="space-y-4">
                    <h2 className="text-5xl font-extrabold text-gray-800">
                        Friends to keep close in your life
                    </h2>

                    <p className="text-gray-600">
                        Your personal shelf of meaningful connections. Browse, tend and nurture the <br /> relationships that matter most.
                    </p>

                    <button className="px-5 py-2 bg-[#244D3F] text-white rounded-md hover:opacity-90 transition mt-2">
                        Add a Friend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;