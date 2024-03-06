import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-[calc(100vh-115px)] bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">About Us</h2>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Welcome to our online store! We're dedicated to providing you with the best shopping experience, offering a wide range of products from top brands at competitive prices.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Our mission is to make online shopping convenient, enjoyable, and secure for every customer. Whether you're looking for fashion, electronics, home goods, or gifts, we've got you covered.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        At our store, customer satisfaction is our top priority. Our team is committed to delivering excellent service, ensuring fast shipping, and providing responsive support to address any inquiries or concerns you may have.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Thank you for choosing us for your shopping needs. We appreciate your support and look forward to serving you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
