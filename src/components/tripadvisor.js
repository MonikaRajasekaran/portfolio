import React from 'react';
import tripLandingPage from '../assets/trip-landingpage.png';
import tripmbl from '../assets/trip1 (2).jpeg';
import tabview from '../assets/tip-tabview.png';
import mdu from '../assets/waytomdy1.png'
import mdu1 from '../assets/waytomdu.png'



function Tripadvisor(){

   return (
   <section>
       <div id="__next" data-reactroot="">
<div style={{ position: 'fixed', zIndex: 9999, top: '60px', right: '16px', bottom: '16px', left: '16px', pointerEvents: 'none' }}></div>
    <div className="w-screen flex flex-col colors_thLight__C_ILS bg-[#fff]" style={{height: '641px' }}>
       <div className="w-full flex flex-col justify-center items-center bg-[#f1f1fa] drop-shadow-lg z-10 px-4 py-4">
          <div className="flex justify-between items-start w-full max-w-[1050px]">
             <div className="flex gap-2 md:gap-4 items-start">
                <div className="w-[30px] md:w-[35px] h-[30px] md:h-[35px] bg-secondary rounded-full drop-shadow-md border-[1px] border-gray-300 flex justify-center items-center cursor-pointer">
                  <a href="./"> <img src="https://cdn-icons-png.flaticon.com/512/5111/5111424.png" alt="back"></img></a>
                </div>
                <div>
                   <h3 className="text-portfolio-highlighter text-xl md:text-3xl font-manrope font-extrabold max-w-fit md:max-w-full">Trip advisor clone(Frontend)</h3>
                   <p className="text-portfolio-text-dark my-2 text-sm md:text-base font-rubik font-normal">Oct 2023</p>
                </div>
             </div>
             {/* <div className="flex items-center gap-2">
                <div className="bg-portfolio-accent hover:md:bg-portfolio-background-alt hover:md:border-portfolio-accent border-[1px] transition duration-300 z-10 h-[30px] md:h-[40px] w-[30px] md:w-[40px] text-portfolio-primary right-0 top-0 flex justify-center items-center drop-shadow-md cursor-pointer rounded-full">
                   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" className="svg-inline--fa fa-share text-sm md:text-base" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M503.7 226.2l-176 151.1c-15.38 13.3-39.69 2.545-39.69-18.16V272.1C132.9 274.3 66.06 312.8 111.4 457.8c5.031 16.09-14.41 28.56-28.06 18.62C39.59 444.6 0 383.8 0 322.3c0-152.2 127.4-184.4 288-186.3V56.02c0-20.67 24.28-31.46 39.69-18.16l176 151.1C514.8 199.4 514.8 216.6 503.7 226.2z"></path>
                   </svg>
                </div>
             </div> */}
          </div>
       </div>
       <div className="md:flex flex-col md:flex-row justify-center gap-4 transition duration-500 overflow-y-auto p-5 md:p-24 sm:hidden" id="details_page">
          <div className="hidden md:block sticky top-4 md:top-0 max-w-[280px] text-sm ">
             <ul className="list-none flex flex-col gap-2 mt-8">
                <li><a href="#overview" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Overview</a></li>
                <li><a href="#me-Tripadvisor-1" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Way  to madurai section</a></li>
                <li><a href="#me-Tripadvisor-2" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Deploy the Tripadvisor website</a></li>
             </ul>
          </div>
          {/* <div className="sticky top-2 mt-2 z-[1] md:hidden">
             <div className="flex justify-center text-xs">
                <div className=" min-h-[30px] w-[190px] shadow-md text-portfolio-highlighter rounded-t-[30px] rounded-b-[16px]">
                   <div className="absolute z-[1]" id="mobile_nav"><a className="h-[40px] w-[190px] text-primary flex cursor-pointer justify-center items-center hover:no-underline px-6 py-2 rounded-[20px] font-rubik font-semibold bg-portfolio-primary shadow-md">Overview</a></div>
                </div>
             </div>
          </div> */}
          <div className="pb-10 my-8">
             <div className="bg-[#f1f1fa] p-10 rounded-xl">
                <section className="styles_milestone__Qzjm7" id="overview">
                   <div className="html-parser">
                      <div>
                         <div className="">
                            <span className="leading-relaxed ">
                            <h1>Trip advisor Overview</h1>
<p> Welcome to our TripAdvisor frontend clone! Explore top-rated destinations. Plan your perfect trip with our comprehensive travel guide and user-friendly interface.
</p>
<p>During the course of this process,</p>
<ul>
    <li>Implemented a responsive and user-friendly design for seamless navigation</li>
    <li>Showcased Landing page variations in desktop and mobile views</li>
    <li>Utilized  web technologies like Html and  CSS for efficient and scalable development</li>
</ul>


                               <div className="image-container"></div>
                            </span>
                            <span>
                               <div className="my-4 flex flex-wrap gap-6">
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined"><img alt="pic" src={tripLandingPage}  className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Tripadvisor Landing Page</p>
                                  </div>
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined"><img alt="pic" src={tripmbl} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Tripadvisor Mobile View</p>
                                  </div>
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined"><img alt="pic" src={tabview} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Tripadvisor Tab View</p>
                                  </div>
                               </div>
                            </span>
                            <span className="leading-relaxed "></span>
                         </div>
                      </div>
                   </div>
                </section>
               
                <section className="styles_milestone__Qzjm7" id="me-Tripadvisor-1">
                   <div className="html-parser">
                      <div>
                         <div className="">
                         <span className="leading-relaxed ">
                         <h1>Way  to madurai section </h1>
                                <h2>Scope of Styling</h2>
                           <ul>
                              <li>Styled this in css using flex,flex-grow.</li>
                              <li>Showed variation in desktop and mobile view in destop it view by four in mobile view displayed by two in each row</li>
                              <li>Responsive for all size.</li>
                           </ul>
                           <h2>Skills Utilized</h2>
                           <p>HTML, CSS</p>

                        </span>
                        <span>
                               <div className="my-4 flex flex-wrap gap-6">
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined"><img alt="pic" src={mdu} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Desktop View</p>
                                  </div>
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined"><img alt="pic" src={mdu1} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Mobile View</p>
                                  </div>
                               </div>
                            </span>
                           
                         </div>
                      </div>
                   </div>
                </section>
               
               
                <section className="styles_milestone__Qzjm7" id="me-Tripadvisor-2">
                   <div className="html-parser">
                      <div>
                         <div className="">
                            <span className="leading-relaxed ">
                               <h1>Deploy the Trip advisor website</h1>
                               <h2>Scope of work</h2>
                               <ul>
                                  <li>Deployed the Trip advisor website to GIT using Git commands</li>
                               </ul>
                               <h3>Skills used</h3>
                               <p>Deployment, GIT, GIT CLI</p>
                            </span>
                            <span>
                               <div className="my-4 flex flex-wrap gap-6">
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined"><img alt="pic" src={tripLandingPage} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Bulkmail Landing page</p>
                                  </div>
                               </div>
                            </span>
                         </div>
                      </div>
                   </div>
                </section>
                <div className="py-4 md:py-8"><div class="flex flex-col items-center md:flex-row gap-6 md:gap-4 mt-4">
                  <button type="button" class="bg-secondary shadow-md border-2 rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px]  border-2 mb-2 md:mb-0 css-jxyevw"><a href="https://monikarajasekaran.github.io/Tripadvisor-clone/" target='blank'>View Website</a> </button>
                  </div>
                  </div>
             </div>
          </div>
       </div>
    </div>
 </div>
   </section>
   )
 
}

export default  Tripadvisor