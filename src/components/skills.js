import skillimage from '../assets/skill1.png'
import skillimage1 from '../assets/skill2.png'
import skillimage3 from '../assets/skill3.png'
import skillimage4 from '../assets/skill4.png'
import skillimage5 from '../assets/skill5.png'
import skillimage6 from '../assets/skill6.png'
import skillimage7 from '../assets/skill7.png'
import skillimage8 from '../assets/skill8.png'
import skillimage9 from '../assets/mongodb.svg'
import skillimage10 from '../assets/skill10.png'
import skillimage11 from '../assets/skill11.png'
import skillimage12 from '../assets/skill12.png'






export default function About() {
    return <section class="w-full flex justify-center pb-6  my-6" id="skills-section">
    <div class="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
       <div id="skills" class="portfolio-highlighter flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px] undefined">
          <h2 class="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center">Skills Acquired</h2>
          <div class="portfolio-highlighter w-full md:w-full h-[2px] hidden md:block"></div>
       </div>
       <div class="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-12 justify-between transition duration-300 mx-4 mb-8">
          <div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">HTML</p>
          </div>
          <div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage3}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">CSS</p>
          </div><div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage4}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">TAILWIND</p>
          </div>
          <div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage1}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">BOOTSTRAP</p>
          </div>
          <div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage5}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">JAVASCRIPT</p>
          </div><div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage8}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">REACT</p>
          </div><div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage11}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">PHP</p>
          </div><div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage12}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">MY SQL</p>
          </div><div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage7}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">NODE</p>
          </div><div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage9}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">MONGODB</p>
          </div><div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage10}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">EXPRESS</p>
          </div><div class="flex flex-col items-center">
          <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div class="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                   <div class="image-container undefined">
                    <img alt="image" src={skillimage6}
                   class="real-image relative
                      duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                </div>
             </div>
             <p class="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">GIT</p>
          </div>
         
        
       </div>
    </div>
 </section>

}
// style={{ background: 'linear-gradient(140.53deg, rgba(255, 255, 255, 0.5) 12.34%, rgba(255, 255, 255, 0) 51.46%)' }}