import React from 'react';
import p1 from '../assets/p1.png'; // Placeholder image, user will update
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function AirbnbOverview() {
    return (
        <section>
            <div id="__next" data-reactroot="">
                <div style={{ position: 'fixed', zIndex: 9999, top: '60px', right: '16px', bottom: '16px', left: '16px', pointerEvents: 'none' }}></div>
                <div className="w-screen flex flex-col colors_thLight__C_ILS bg-[#fff]" style={{ height: '641px' }}>
                    <div className="w-full flex flex-col justify-center items-center bg-[#f1f1fa] drop-shadow-lg z-10 px-4 py-4">
                        <div className="flex justify-between items-start w-full max-w-[1050px]">
                            <div className="flex gap-2 md:gap-4 items-start">
                                <div className="w-[30px] md:w-[35px] h-[30px] md:h-[35px] bg-secondary rounded-full drop-shadow-md border-[1px] border-gray-300 flex justify-center items-center cursor-pointer">
                                    <a href="./"> <img src="https://cdn-icons-png.flaticon.com/512/5111/5111424.png" alt="back"></img></a>
                                </div>
                                <div>
                                    <h3 className="text-portfolio-highlighter text-xl md:text-3xl font-manrope font-extrabold max-w-fit md:max-w-full">Airbnb Front Clone</h3>
                                    <p className="text-portfolio-text-dark my-2 text-sm md:text-base font-rubik font-normal">Jan 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex flex-col md:flex-row justify-center gap-4 transition duration-500 overflow-y-auto p-5 md:p-24 sm:hidden" id="details_page">
                        <div className="hidden md:block sticky top-4 md:top-0 max-w-[280px] text-sm ">
                            <ul className="list-none flex flex-col gap-2 mt-8">
                                <li><a href="#overview" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Overview</a></li>
                                <li><a href="#airbnb-1" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Frontend Development</a></li>
                                <li><a href="#airbnb-3" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Deployment</a></li>
                            </ul>
                        </div>
                        <div className="pb-10 my-8">
                            <div className="bg-[#f1f1fa] p-10 rounded-xl">
                                <section className="styles_milestone__Qzjm7" id="overview">
                                    <div className="html-parser">
                                        <div>
                                            <div className="">
                                                <span className="leading-relaxed ">
                                                    <h1>Overview</h1>
                                                    <p>A fully functional Airbnb clone built with Next.js, featuring a modern UI, secure payments, and comprehensive booking capabilities.</p>
                                                    <p>During the course of this project,</p>
                                                    <ul>
                                                        <li>Developed using Next.js for server-side rendering and optimized performance</li>
                                                        <li>Styled with Tailwind CSS to create a responsive and visually appealing interface</li>
                                                        <li>Integrated Razorpay for secure and reliable payment processing</li>
                                                        <li>Implemented Redux Toolkit for efficient global state management</li>
                                                    </ul>
                                                    <div className="image-container"></div>
                                                </span>
                                                <span>
                                                    <div className="my-4 flex flex-wrap gap-6">
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="pic" src={p1} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>                                           </div>
                                                                <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                                            </div>
                                                            <p className="mt-2">Airbnb Landing page</p>
                                                        </div>
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="pic" src={p1} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                                <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                                            </div>
                                                            <p className="mt-2">Mobile View</p>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="leading-relaxed "></span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="styles_milestone__Qzjm7" id="airbnb-1">
                                    <div className="html-parser">
                                        <div>
                                            <div className="">
                                                <span className="leading-relaxed ">
                                                    <h1>Frontend Development with Next.js</h1>
                                                    <h2>Scope of Work</h2>
                                                    <ul>
                                                        <li>Built responsive pages using Next.js and Tailwind CSS</li>
                                                        <li>Implemented date selection logic using React Datepicker and Moment.js</li>
                                                        <li>Managed application state with Redux Toolkit</li>
                                                        <li>Integrated Razorpay payment gateway</li>
                                                    </ul>
                                                    <h2>Skills Used</h2>
                                                    <p>Next.js, Tailwind CSS, Redux Toolkit, React Datepicker, Razorpay</p>

                                                </span>
                                                <span>
                                                    <div className="my-4 flex flex-wrap gap-6">
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="pic" src={p1} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                                <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                                            </div>
                                                            <p className="mt-2">Booking Page</p>
                                                        </div>
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="pic" src={p1} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                                <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                                            </div>
                                                            <p className="mt-2">Listing Details</p>
                                                        </div>
                                                    </div>
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="styles_milestone__Qzjm7" id="airbnb-3">
                                    <div className="html-parser">
                                        <div>
                                            <div className="">
                                                <span className="leading-relaxed ">
                                                    <h1>Deployed the Airbnb Clone</h1>
                                                    <h2>Scope of Work</h2>
                                                    <ul>
                                                        <li>Deployed the application to Vercel for fast and reliable hosting</li>
                                                    </ul>
                                                    <h3>Skills Used</h3>
                                                    <p>Deployment, Vercel</p>
                                                </span>
                                                <span>
                                                    <div className="my-4 flex flex-wrap gap-6">
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined"><Zoom><img alt="pic" src={p1} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></Zoom>
                                                                </div>
                                                                <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                                            </div>
                                                            <p className="mt-2">Live Application</p>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="py-4 md:py-8"><div class="flex flex-col items-center md:flex-row gap-6 md:gap-4 mt-4">
                                    <button type="button" class="bg-secondary shadow-md border-2 rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px]  border-2 mb-2 md:mb-0 css-jxyevw"><a href="https://book-nest-azure-three.vercel.app/" target='blank'>View Website</a> </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AirbnbOverview;
