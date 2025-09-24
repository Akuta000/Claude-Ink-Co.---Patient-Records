
import React from 'react';
import { SecurityLockIcon, TickIcon, ShieldCheckIcon } from '../constants';

const SecurityFeature: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-center">
        <TickIcon />
        <span className="text-gray-300">{children}</span>
    </li>
);

const Security: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center space-x-4 mb-6">
                            <SecurityLockIcon />
                            <h2 className="text-4xl font-extrabold">Security & Privacy</h2>
                        </div>
                        <p className="text-gray-400 mb-8 text-lg">
                            At Claude Ink Co, we understand that patient privacy is paramount. Our system implements industry-leading security measures to protect sensitive medical information.
                        </p>
                        <ul className="space-y-5">
                            <SecurityFeature>
                                <strong className="text-white">End-to-End Encryption:</strong> All data is encrypted in transit and at rest using AES-256 encryption.
                            </SecurityFeature>
                            <SecurityFeature>
                                <strong className="text-white">Role-Based Access:</strong> Customizable permissions ensure staff only access relevant patient information.
                            </SecurityFeature>
                            <SecurityFeature>
                                <strong className="text-white">Audit Trails:</strong> Complete logging of all system activities for compliance and security.
                            </SecurityFeature>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center">
                        <div className="bg-white/10 p-4 rounded-full mb-6">
                             <ShieldCheckIcon />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">HIPAA Compliant</h3>
                        <p className="text-blue-200 mb-8 max-w-sm">
                            Our system meets all HIPAA requirements and undergoes regular security audits to ensure the highest level of patient data protection.
                        </p>
                        <div className="bg-white/90 rounded-lg p-4 w-full max-w-xs">
                            <p className="text-5xl font-bold text-blue-700">99.9%</p>
                            <p className="text-sm font-semibold text-gray-600 mt-1">Uptime Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;
