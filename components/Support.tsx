
import React from 'react';
import { PhoneIcon, MailIcon, BuildingIcon } from '../constants';

interface SupportCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    contact: string;
    contactLink?: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ icon, title, description, contact, contactLink }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center flex flex-col items-center">
        <div className="bg-blue-100/70 inline-block p-4 rounded-xl mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 leading-relaxed mb-4 flex-grow">{description}</p>
        <a href={contactLink || '#'} className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            {contact}
        </a>
    </div>
);


const Support: React.FC = () => {
    const supportOptions = [
        {
            icon: <PhoneIcon />,
            title: 'Phone Support',
            description: '24/7 technical assistance.',
            contact: '+1 (555) 232 3456',
            contactLink: 'tel:+15552323456'
        },
        {
            icon: <MailIcon />,
            title: 'Email Support',
            description: 'Get help via email.',
            contact: 'support@claudeink.hospital',
            contactLink: 'mailto:support@claudeink.hospital'
        },
        {
            icon: <BuildingIcon />,
            title: 'IT Department',
            description: 'Ground Floor, Building A.',
            contact: 'Room 103'
        },
    ];

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900">Get Support</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our technical support team is available 24/7 to assist with any questions or issues.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {supportOptions.map((option, index) => (
                        <SupportCard key={index} {...option} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Support;
