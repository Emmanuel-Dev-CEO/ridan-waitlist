import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BgImage from '../assets/icon-bg.png';

const Services = () => {
    return (
        <section className="bg-[#191919] py-16  overflow-x-hidden">
            {/* Background Section */}
            <div
                className="bg-cover bg-center min-h-full flex flex-col items-center"
                style={{ backgroundImage: `url(${BgImage})` }}
            >
                <h2 className="text-4xl font-itim font-bold text-white text-center mb-8">
                    OUR PRODUCTS & SERVICES
                </h2>
                {/* Service Cards */}
                <div className="flex flex-col md:flex-row px-4 justify-center gap-10 md:gap-12 px-4 md:px-16">
                    {/* Card 1: Diverse Product Selection */}
                    <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        className="bg-white w-[300px] h-[300px] shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <ShoppingBasketIcon className="text-green-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Diverse Product Selection</h3>
                        <p className="text-gray-600 text-lg font-itim">
                            Explore a wide range of categories, from fashion and electronics to home essentials and more, all in one place.
                        </p>
                    </div>

                    {/* Card 2: Affordable Prices */}
                    <div
                        data-aos="zoom-in-down"
                        data-aos-offset="200"
                        className="bg-white w-[300px] h-[300px] shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <AssuredWorkloadIcon className="text-yellow-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Affordable Prices</h3>
                        <p className="text-gray-600 text-lg font-itim">
                            Enjoy competitive pricing on all our products, ensuring you get the best value for your money.
                        </p>
                    </div>

                    {/* Card 3: Seamless Shopping Experience */}
                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        className="bg-white w-[300px] h-[300px] shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <LocalShippingIcon className="text-blue-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Seamless Shopping Experience</h3>
                        <p className="text-gray-600 text-lg font-itim">
                            Shop with ease using our user-friendly platform, fast checkout, and reliable delivery services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
