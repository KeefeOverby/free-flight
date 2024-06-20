'use client';

import { RocketLaunchIcon, Square3Stack3DIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React from 'react';

const links = [
    { name: 'Dashboard', href: '/ui/dashboard', icon: Square3Stack3DIcon },
    { name: 'Weather', href: '/ui/dashboard/weather', icon: SunIcon },
    { name: 'Pre-Flight', href: '/ui/dashboard/pre-flight', icon: RocketLaunchIcon },
];

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-full items-center justify-center rounded-md bg-gray-900 text-sm font-medium hover:bg-gray-700 hover:text-green-400 justify-start p-2',
                            {
                                'bg-gray-600 text-green-300':
                                    pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}

export default NavLinks;