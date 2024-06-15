'use server';

async function GetMetar() {
    const response = await fetch(
        'https://aviationweather.gov/api/data/metar?ids=KJLN&format=json&taf=true&hours=1'
    );
    const objMetar = await response.json();
    console.log(objMetar);
    return (
        <div className="flex flex-col h-fit w-full">
                        <label className="flex flex-row h-fit w-full items-center justify-between py-4">
                            METAR:
                            <button
                                className="text-white items-center h-fit w-1/4 bg-sky-900 rounded-md p-2"
                                onClick={GetMetar}
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
    );
}

export default GetMetar