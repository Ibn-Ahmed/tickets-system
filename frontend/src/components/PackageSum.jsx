import React from 'react';

export const PackageSum = () => {
    return (
        <div className="w-full p-4">
            <h1 className="bg-gray-300 text-center py-2">Package Summary</h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex flex-col items-center bg-white p-4 shadow-md w-full">
                    <p className="mb-2">VIP</p>
                    <p className="mb-2">Quantity: 30</p>
                    <p className="mb-2">Amount: $54000</p>
                </div>
                <div className="flex flex-col items-center bg-white p-4 shadow-md w-full">
                    <p className="mb-2">Regular</p>
                    <p className="mb-2">Quantity: 60</p>
                    <p className="mb-2">Amount: $100000</p>
                </div>
                <div className="flex flex-col items-center bg-white p-4 shadow-md w-full">
                    <p className="mb-2">VVIP</p>
                    <p className="mb-2">Quantity: 10</p>
                    <p className="mb-2">Amount: $3202</p>
                </div>
            </div>
        </div>
    );
};
