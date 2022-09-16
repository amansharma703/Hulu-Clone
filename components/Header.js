import React from "react";
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-3 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='Home' Icon={HomeIcon} />
                <HeaderItem title='Trending' Icon={LightningBoltIcon} />
                <HeaderItem title='Verified' Icon={BadgeCheckIcon} />
                <HeaderItem title='Collections' Icon={CollectionIcon} />
                <HeaderItem title='Search' Icon={SearchIcon} />
                <HeaderItem title='Account' Icon={UserIcon} />
            </div>
            <Image className='object-contain' src='/logo.webp' width={150} height={100} alt='logo' />
        </header>
    );
};

export default Header;
