import React from 'react';
import Oreo from '../assets/oreo.jpeg'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4 bg-white">
            {/* LEFT SIDE */}
            <div className="flex items-center space-x-4">  
                <img src={Oreo} alt="Oreo" className="w-10 h-10 object-contain" />
                <Link to="/" className="text-3xl font-semibold text-black hover:text-bbyblue">
                    Kelly Tran
                </Link>
            </div>
            {/* RIGHT SIDE */}
            <div className="flex space-x-4">
                <Link to="/resume" className="text-lg font-semibold text-black hover:text-bbyblue">
                    Resume
                </Link>
                <a 
                    href="https://www.linkedin.com/in/kelly-tran-8888888888888888888/" 
                    className="text-lg font-semibold text-black hover:text-bbyblue"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
