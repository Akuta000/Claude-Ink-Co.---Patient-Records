
import React from 'react';
import { DocumentIcon, SearchIcon, ShieldCheckIcon, UsersIcon, ClockIcon, ChartBarIcon } from '../constants';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <div className="bg-blue-100/70 inline-block p-4 rounded-xl mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
);


const Features: React.FC = () => {
    const featureList = [
        {
            icon: <DocumentIcon />,
            title: 'Digital Records Management',
            description: 'Comprehensive digital patient records with secure cloud storage and instant accessibility.'
        },
        {
            icon: <SearchIcon />,
            title: 'Advanced Search',
            description: 'Quickly locate patient information with powerful search filters and intelligent indexing.'
        },
        {
            icon: <ShieldCheckIcon />,
            title: 'HIPAA Compliant',
            description: 'Full compliance with healthcare privacy regulations, ensuring patient data security.'
        },
        {
            icon: <UsersIcon />,
            title: 'Multi-User Access',
            description: 'Role-based access control allowing appropriate staff to access relevant patient information.'
        },
        {
            icon: <ClockIcon />,
            title: 'Real-Time Updates',
            description: 'Instant synchronization across all departments, ensuring everyone has the latest information.'
        },
        {
            icon: <ChartBarIcon />,
            title: 'Analytics Dashboard',
            description: 'Comprehensive reporting and analytics to improve patient care and operational efficiency.'
        }
    ];

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900">Advanced Patient Record Features</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our comprehensive system provides healthcare professionals with the tools they need to deliver exceptional patient care efficiently and securely.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureList.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
