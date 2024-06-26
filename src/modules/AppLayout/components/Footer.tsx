import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col md:flex-row md:gap-20 gap-4 justify-center md:justify-between p-4 md:px-10 text-center bg-[#f3f4f6]">
            <p className="text-sm text-gray-500">Terms of Service</p>
            <p className="text-sm text-gray-500">© 2021 Blinqpay. All rights reserved.</p>       
        </footer>
    );
};

export default Footer;