'use server';

import React from 'react';

const GetPirep = async () => {
    const response = await fetch(
        'https://aviationweather.gov/api/data/pirep?id=KJLN&format=raw&age=1&distance=500&level=3000&inten=lgt'
    );
    const objPirep = await response.text();
    console.log(objPirep);
    return (
        <div className="flex flex-col h-fit w-full">
            <label className="flex flex-row h-fit w-full items-center justify-between py-4">
                PIREP:
                <button
                    className="text-red-400 items-center h-fit w-1/4 bg-gray-900 rounded-md p-2"
                    onClick={GetPirep}
                >
                    Get PIREP
                </button>
            </label>
            <textarea
                className="w-full bg-gray-900 text-green-300 rounded-md p-2"
                name="pirepData"
                value={objPirep}
                readOnly
                rows={4}
                cols={40}
            />
        </div>
    );
}

export default GetPirep;
