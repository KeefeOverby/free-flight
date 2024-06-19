'use server';

import GetMetar from '@/app/components/get-metar';
import GetPirep from '@/app/components/get-pirep';

const Weather = async () => {
    return (
        <>
            <section className="flex flex-col h-screen w-full items-center justify-between">
                <p className="h-fit w-full text-center text-xl pt-4">Weather</p>
                <div className="flex flex-col h-full w-full items-start">
                    <GetMetar />
                    <GetPirep />
                </div>
            </section>
        </>
    );
}

export default Weather;