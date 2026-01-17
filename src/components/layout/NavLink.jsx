'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathName = usePathname()
    return (
        <Link href={href} className={`${pathName.startsWith(href)&& "text-primary"} font-medium`}>
        {children}
        </Link>
    );
};

export default NavLink;