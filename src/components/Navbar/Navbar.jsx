"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {

    const pathName = usePathname();
    // console.log(pathName, 'path name from navbar');

    const navLinks = <>
        <li><Link href='/' className={`font-semibold text-[#64748B] mr-1 ${pathName === '/' ? 'text-white bg-[#244D3F] ' : ''} `}><RiHome2Line />
            Home</Link></li>
        <li><Link href='/timeline' className={`font-semibold text-[#64748B] mr-1 ${pathName === '/timeline' ? 'text-white bg-[#244D3F] ' : ''} `}><RiTimeLine /> Timeline</Link></li>
        <li><Link href='/stats' className={`font-semibold text-[#64748B] ${pathName === '/stats' ? 'text-white bg-[#244D3F] ' : ''} `}><TfiStatsUp /> Stats</Link></li>
    </>

    return (
        <div className='bg-base-100 shadow-sm '>
            <div className="navbar max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl font-bold flex items-center gap-0">
                        <span className="text-[#1F2937]">Keen</span>
                        <span className="text-[#244D3F]">Keeper</span>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;