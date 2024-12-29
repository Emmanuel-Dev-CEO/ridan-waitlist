import React, { useState, useEffect } from 'react';
import WomanImage from '../assets/woman.png';

const Waitlist = React.forwardRef((props, ref) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const calculateTimeLeft = () => {
        const eventDate = new Date('2025-04-01T00:00:00');
        const now = new Date();
        const timeDiff = eventDate - now;

        if (timeDiff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = formData;

        if (!firstName || !lastName || !email) {
            setError('Please fill out all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        console.log('Form submitted:', formData);
        setSubmitted(true);
        setError('');

        // Reset submission status after 5 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ firstName: '', lastName: '', email: '' });
        }, 5000);
    };

    return (
        <section id='Waitlist' ref={ref} className="bg-gray-50 overflow-x-hidden px-4 md:px-16 py-12">
            {/* Main Content */}
            <div className="flex flex-col mt-12 md:flex-row items-center justify-between gap-8">
                {/* Left Side: Image */}
                <div className="md:w-1/2 text-center mb-8 md:mb-0">
                    <img className="object-cover mx-auto" src={WomanImage} alt="Woman" />
                </div>

                {/* Right Side: Form */}
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold font-itim mb-4 text-center md:text-left">
                        GET EARLY ACCESS TO <span className="text-orange-500">RIDAN EXPRESS</span>
                    </h2>
                    <p className="text-gray-600 mb-6 text-md text-center font-itim md:text-left">
                        Sign up for our waitlist and be the first to explore an exciting range of exclusive products at amazing prices.
                        Don’t miss out <span className='text-green-500'>secure your spot now!!!</span>
                    </p>

                    {submitted ? (
                        <div className="bg-green-100 font-itim text-green-700 p-4 rounded-md text-center">
                            Congratulations!!, you have just joined the waitlist.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md">
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full md:w-1/2 p-2 border font-itim text-lg rounded-md focus:outline-none focus:border-orange-500"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full md:w-1/2 p-2 border text-lg font-itim rounded-md focus:outline-none focus:border-orange-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md text-lg font-itim focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                            <button
                                type="submit"
                                className="w-full font-itim text-lg bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
                            >
                                JOIN THE WAITLIST
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Countdown Timer Section */}
            <div className="bg-[#191919] h-auto md:h-[50vh] mb-10 rounded-2xl shadow-xl flex justify-center items-center">
                <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8 text-center font-semibold md:font-bold">
                    {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                        <div key={unit} className="p-4 md:p-6 rounded-lg shadow-lg">
                            <div className="text-orange-500 text-3xl font-itim md:text-6xl font-bold">{timeLeft[unit]}</div>
                            <span className="text-sm md:text-lg text-gray-300 font-itim uppercase">{unit}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Waitlist;
