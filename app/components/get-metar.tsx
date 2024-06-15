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
                    className="text-red-400 items-center h-fit w-1/4 bg-gray-900 rounded-md p-2"
                    onClick={GetMetar}
                >
                    Get METAR
                </button>
            </label>
            <div className="flex h-fit w-full bg-gray-900 text-green-300 rounded-md p-2">
                {objMetar.map((item: any) => (
                    <span key={item.metar_id}>
                        {item.name} - {item.rawOb}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default GetMetar;
