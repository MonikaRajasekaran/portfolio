import HeroImg from '../assets/aboutimage.jpg';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import About from '../assets/aboutimage.jpg';

export default function Herosection() {
  return (
    <section class="w-full flex justify-center pb-6  my-6">
   <div class="md:h-[550px] w-full max-w-[1050px] flex justify-between items-center gap-4 md:gap-0 flex-col md:flex-row flex-col-reverse px-4 md:px-0 pb-4 md:pb-0" id="top">
       <div class="h-full w-full md:w-1/2 flex justify-center md:justify-start items-center font-rubik">
          <div class="md:max-w-[600px] text-center md:text-left">
             <p class="text-portfolio-text-medium text-sm md:text-xl font-semibold mb-1 mt-2 md:mt-0">Hi, my name is</p>
             <h1 class="text-portfolio-highlighter text-3xl md:text-5xl font-manrope font-black mb-2 md:mb-4">Monika Rajasekaran </h1>
             <p class="text-portfolio-text-light text-xs md:text-base font-normal">I have built many industry grade projects from scratch and am armed
                with many technological skills useful for tech projects. Check out
                my projects below. :)
             </p>
             <div class="text-portfolio-text-medium flex flex-col md:flex-row items-center gap-2 text-sm md:text-lg font-medium mt-4"></div>
             <div class="bg-portfolio-secondary text-white rounded-[20px] flex gap-y-2 md:gap-0 justify-around items-center mt-6 min-h-[100px] p-2 md:p-0">
                <div class="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                   <span class="text-3xl md:text-5xl font-bold">12</span> 
                   <p class="text-[8px] md:text-[12px] w-max px-3">VERIFIED<br class="block md:hidden" /> SKILLS</p>
                </div>
                <div class="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                   <span class="text-3xl md:text-5xl font-bold">10+</span> 
                   <p class="text-[8px] md:text-[12px] w-max px-3">PROFESSIONAL<br class="block md:hidden" /> PROJECTS</p>
                </div>
                <div class="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                   <span class="text-3xl md:text-5xl font-bold">25+</span> 
                   <p class="text-[8px] md:text-[12px] w-max px-3">DSA PROBLEMS<br class="block md:hidden" /> SOLVED</p>
                </div>
             </div>
          </div>
       </div>
       <div class="h-full w-full md:w-1/2 flex justify-center md:justify-end items-center relative">
  <div class="h-[150px] w-[150px] md:h-[350px] md:w-[350px] relative flex justify-center items-center rounded-full">
    <div class="_image-container object-contain rounded-full" alt="profileImage">
      <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}>
      <img
  src={HeroImg}      
  decoding="async"
  data-nimg="fill"
  class="_image duration-700 ease-in-out grayscale-0 blur-0 scale-100"
  style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
  sizes="100vw"
  srcSet={`${HeroImg} 640w, ${HeroImg} 750w, ${HeroImg} 828w, ${HeroImg} 1080w, ${HeroImg} 1200w, ${HeroImg} 1920w, ${HeroImg} 2048w, ${HeroImg} 3840w`}
  alt="Hero image"
/>

      </span>
    </div>
  </div>
</div>
</div>

    </section>
      );
}
