'use client';

import { Square3Stack3DIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Dashboard', href: '/ui/dashboard', icon: Square3Stack3DIcon },
    { name: 'Weather', href: '/ui/dashboard/weather', icon: SunIcon },
];

export default function NavLinks() {
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
                            'flex h-full items-center justify-center rounded-md bg-gray-200 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 justify-start p-2',
                            {
                                'bg-sky-100 text-blue-600':
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
