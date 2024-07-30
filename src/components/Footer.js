import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Asep Trisna Setiawan. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://github.com/Aseptrisna" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
