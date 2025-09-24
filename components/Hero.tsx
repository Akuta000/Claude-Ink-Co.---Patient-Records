
import React from 'react';

const PatientCard: React.FC = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm transform transition-all duration-500 hover:scale-105">
        <div className="flex items-center space-x-4 mb-6">
            <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            </div>
            <div>
                <p className="font-bold text-gray-800">Patient ID: #4422B</p>
                <p className="text-sm text-gray-500">John Doe</p>
            </div>
        </div>
        <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center">
                <span className="text-gray-500">Last Visit</span>
                <span className="font-semibold text-gray-700">Dec 19, 2024</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-gray-500">Status</span>
                <span className="font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-gray-500">Records</span>
                <span className="font-semibold text-gray-700">28 Files</span>
            </div>
        </div>
    </div>
);

const Stats: React.FC = () => (
    <div className="mt-16 flex justify-center md:justify-start space-x-8 sm:space-x-16 text-center">
        <div>
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="text-gray-500 mt-1">System Availability</p>
        </div>
        <div>
            <p className="text-3xl font-bold text-blue-600">100%</p>
            <p className="text-gray-500 mt-1">HIPAA Compliant</p>
        </div>
        <div>
            <p className="text-3xl font-bold text-blue-600">50K+</p>
            <p className="text-gray-500 mt-1">Patient Records</p>
        </div>
    </div>
);

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-blue-50/50 to-white pt-20 pb-24">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            Patient Records
                            <br />
                            <span className="text-blue-600">Made Simple</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                            Streamlined, secure, and comprehensive patient record management system designed specifically for healthcare professionals at Claude Ink Co. Medical Center.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start space-x-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                Access Records
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                Learn More
                            </button>
                        </div>
                        <Stats />
                    </div>
                    <div className="flex justify-center items-center">
                        <PatientCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
