import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 sticky bottom-0 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p>&copy; 2024 Your E-Store App. All rights reserved.</p>
                    <div>
                        <a href="#" className="text-white hover:text-gray-300 mx-2">Privacy Policy</a>
                        <span className="text-gray-500">|</span>
                        <a href="#" className="text-white hover:text-gray-300 mx-2">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
