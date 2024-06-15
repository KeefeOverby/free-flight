'use client';

export default function Weather() {
    async function getMetar() {
        const response = await fetch(
            'https://aviationweather.gov/api/data/metar?ids=KJLN&format=json&taf=true&hours=1'
        );
        const objMetar = await response.json();
        console.log(objMetar);
        return objMetar;
    }

    async function getPirep() {
        const response = await fetch(
            'https://aviationweather.gov/api/data/pirep?id=KJLN&format=raw&age=1&distance=500&level=3000&inten=lgt'
        );
        const objPirep = await response.json();
        console.log(objPirep);
        return objPirep;
    }

    return (
        <>
            <section className="flex flex-col h-screen w-full items-center justify-between">
                <p className="h-fit w-full text-center text-xl pt-4">Weather</p>
                <div className="flex flex-col h-full w-full items-start">
                    <div className="flex flex-col h-fit w-full">
                        <label className="flex flex-row h-fit w-full items-center justify-between py-4">
                            METAR:
                            <button
                                className="text-white items-center h-fit w-1/4 bg-sky-900 rounded-md p-2"
                                onClick={getMetar}
                            >
                                Get METAR
                            </button>
                        </label>
                        <textarea
                            className="w-full bg-gray-200"
                            name="metarData"
                            rows={4}
                            cols={40}
                        />
                    </div>
                    <div className="flex flex-col h-fit w-full">
                        <label className="flex flex-row h-fit w-full items-center justify-between py-4">
                            PIREP:
                            <button
                                className="text-white items-center h-fit w-1/4 bg-sky-900 rounded-md p-2"
                                onClick={getPirep}
                            >
                                Get PIREP
                            </button>
                        </label>
                        <textarea
                            className="w-full bg-gray-200"
                            name="metarData"
                            rows={4}
                            cols={40}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
