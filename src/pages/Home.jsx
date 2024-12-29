import React, { useState } from "react";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MyImage from '../assets/shopping.png';
import BgImage from '../assets/icon-bg.png';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <div className="bg-orange-600 min-h-screen overflow-y-hidden w-full">
                <div
                    className="bg-cover bg-center min-h-screen  "
                    style={{ backgroundImage: `url(${BgImage})` }}
                >
                    {/* Navbar */}
                    <nav className="flex justify-between items-center p-5 px-10 lg:px-20">
                        <div className="font-semibold flex items-center text-white text-lg">
                            <ShoppingCartIcon className="bg-white text-orange-500 rounded-full p-1 mr-2" />
                            Ridan Express
                        </div>
                        {/* Desktop Icons */}
                        <ul className="hidden md:flex gap-20 text-white">
                            <a href="#"><li><XIcon /></li></a>
                            <a href="#"><li><InstagramIcon /></li></a>
                            <a href="#"><li><LinkedInIcon /></li></a>
                            <a href="#"><li><FacebookIcon /></li></a>
                        </ul>
                        {/* Hamburger Menu for Mobile */}
                        <div className="md:hidden text-white cursor-pointer" onClick={toggleNav}>
                            <MenuIcon fontSize="large" />
                        </div>
                    </nav>

                    {/* Side Navigation for Mobile & Tablet */}
                    <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                        <div className="flex justify-between items-center p-5 border-b">
                            <h2 className="text-lg font-semibold text-orange-500">Ridan Express</h2>
                            <button onClick={toggleNav} className="text-black">
                                <CloseIcon />
                            </button>
                        </div>
                        <ul className="flex flex-col gap-5 p-5 text-gray-700">
                            <h3 className="text-orange-500 font-itim ">Visit Our Socials</h3>
                            <a href="#" className="hover:text-orange-500"><li><InstagramIcon className="text-orange-500" /></li></a>
                            <a href="#" className="hover:text-orange-500"><li><LinkedInIcon className="text-orange-500" /></li></a>
                            <a href="#" className="hover:text-orange-500"><li><FacebookIcon className="text-orange-500" /></li></a>
                            <a href="#" className="hover:text-orange-500"><li><XIcon className="text-orange-500" /></li></a>
                            <div className="flex gap-4 mt-5">
                                <p className="text-orange-500 font-itim ">Your home of ultimate shoping.</p>
                            </div>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="mt-[70px] flex mx-4 sm:mx-10 lg:mx-40 text-left justify-evenly flex-wrap">
                        <div className="gap-5 ">

                            <h1 className="font-itim text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl font-bold text-white">
                                <span className="text-orange-300">Get!!!</span> <br /> Your Favorite Finds, <br /> Delivered to Your <br /> Doorstep
                            </h1>
                            <p className="text-white font-itim mt-4 text-md sm:md md:text-lg lg:text-lg xl:text-lg">
                                Join the waitlist now and get ready for unlimited shopping, shop like a billionaire!!
                            </p>
                            <a href="#Waitlist" className="no-underline">
                                <button
                                    className="text-orange-500 font-itim bg-white shadow-xl mt-5 rounded-lg px-5 py-2"
                                >
                                    Join the waitlist
                                </button>
                            </a>
                        </div>
                        <div className="w-[400px] sm:w-[500px] lg:w-[400px] xl:w-[400px] mx-auto">
                            <img className="drop-shadow-2xl w-full" src={MyImage} alt="Shopping Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
