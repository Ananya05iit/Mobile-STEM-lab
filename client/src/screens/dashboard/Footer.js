import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-color text-white p-4">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 border-r border-gray-100 pr-4">
                    <h3 className="text-xl font-bold mb-2">Mobile Stem Lab</h3>
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0 border-r border-gray-100 pr-4 pl-8">
                    <h3 className="text-xl font-bold mb-2 ">QUICK LINKS</h3>
                    <ul className="list-none pl-0">
                        <li className="text-l mb-1"><NavLink to="/home" className="text-white hover:text-gray-300">Home</NavLink></li>
                        <li><NavLink to="/aboutUs" className="text-white hover:text-gray-300">About Us</NavLink></li>
                        <li><NavLink to="/labExperiment" className="text-white hover:text-gray-300">Lab Experiment</NavLink></li>
                        <li><NavLink to="/howBook" className="text-white hover:text-gray-300">How it works</NavLink></li>
                        <li><NavLink to="/report" className="text-white hover:text-gray-300">Visit Report</NavLink></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0 pl-8">
                    <h3 className="text-xl font-bold mb-2">WRITE TO US</h3>
                    <form action="#" method="post">
                        <div className="mb-2"> 
                            <label htmlFor="name" className="block text-white">Name:</label>
                            <input type="text" id="name" name="name" className="w-full p-1 border rounded text-gray-800" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-white">Email:</label>
                            <input type="email" id="email" name="email" className="w-full p-1 border rounded text-gray-800" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="message" className="block text-white">Message:</label>
                            <textarea id="message" name="message" className="w-full p-2 border rounded text-gray-800" rows="2" required></textarea>
                        </div>
                    

                <button
                    type="submit"
                    // className={`bg-blue-500 text-white px-4 py-2 rounded ${!isCaptchaValid && 'cursor-not-allowed opacity-50'} hover:bg-blue-700 `}
                    className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 `}
                    // disabled={!isCaptchaValid}
                > 
                    Submit
                </button>
                    </form>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
