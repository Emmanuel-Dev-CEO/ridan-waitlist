import React from "react";
import PhoneImage from '../assets/iPhone-15-Pro.png';

const About = () => {
    return (
        <section id="About" className="bg-gray-100 h-auto md:h-[80vh] overflow-x-hidden py-10">
            <div className="flex flex-col md:flex-row  justify-around items-center gap-8 md:gap-0">
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="w-full md:w-[40%] flex justify-center">
                    <img src={PhoneImage} alt="iPhone 15 Pro" className="max-w-full h-auto" />
                </div>
                <div className="w-full md:w-[50%] text-center md:text-left px-4">
                    <h3 className="text-5xl font-bold text-orange-500 font-itim mb-4">WHO WE ARE</h3>
                    <p className="text-gray-700 font-itim text-xl leading-relaxed">
                        At Ridan Express, we’re redefining the online shopping experience. Our platform is more than just a marketplace—it’s a gateway to convenience, quality, and value. With an extensive collection of premium products, competitive pricing, and a seamless shopping journey, we empower you to shop smarter and live better. Our mission goes beyond transactions; we aim to build lasting connections by delivering not just products, but exceptional experiences, every step of the way.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
