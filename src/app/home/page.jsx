import HeroSection from '@/components/Home/HeroSection';
import DashboardCards from '@/components/Home/DashboardCards';
import React from 'react';
import FriendCard from '@/components/Home/FriendCard';
import Link from 'next/link';

const HomePage = async () => {

    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();
    // console.log(friends);

    return (
        <div className='bg-gray-50'>
            <div className="w-10/12 mx-auto">

                {/* HERO */}
                <HeroSection></HeroSection>

                {/* DASHBOARD */}
                <DashboardCards friends={friends} />

                <div className='mb-20'>
                    <h2 className='text-2xl font-bold mb-4'>Your Friends</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            friends.map((friend) => <Link key={friend.id} href={`/home/${friend.id}`}><FriendCard friend={friend}></FriendCard></Link>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;