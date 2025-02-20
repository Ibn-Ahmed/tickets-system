import React from 'react';
import mainImage from '../assets/main.jpg';

export const Home = () => {
    return (
        <div className="flex flex-col md:flex-row w-[90%] h-screen">
            <div className="order-1 md:order-2 flex-1 flex items-center justify-center p-4">
                <img src={mainImage} alt="Main" className="w-full h-auto md:h-full object-cover" />
            </div>
            <div className="order-2 md:order-1 flex-1 flex items-center justify-center p-4">
                <p className="text-center md:text-left text-5xl md:text-3xl font-bold text-slate-800">
                    Welcome to our tickets app! Here you can find and purchase tickets for various events. Enjoy a seamless experience with our user-friendly interface.
                </p>
            </div>
        </div>
    );
};