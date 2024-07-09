'use client';

import Nav from '@/app/components/nav';
import PopUp from './components/pop-up';

const LandingPage = () => {

    return (
        <main className="grid grid-cols-1 h-screen w-full p-4">
            <section className="flex flex-col h-full w-full items-center justify-between">
                <Nav />
                <PopUp />
            </section>
        </main>
    );
};

export default LandingPage;
