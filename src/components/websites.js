import signup from '../assets/actodo1.png';
import Udemy from '../assets/udemy.png';
import Weather from '../assets/weather.png';
import Nostra from '../assets/Nostra.png';
import Greenden from '../assets/greenden.png';
import Triadvisor from '../assets/trip-landingpage.png';





export default function Websites() {
  return (
    <section class="w-full flex justify-center pb-6 my-6 " id="skills-section">
      <div class="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8 rounded-lg">
        <div
          id="skills"
          class="portfolio-highlighter flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px]"
        >
          <h2 class="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center ">
            My Work
          </h2>
          <div class="portfolio-highlighter w-full md:w-full h-[2px] hidden md:block"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 justify-between transition duration-300 mx-4 mb-8 ">
        <div class="flex flex-col items-center ">
        <img class="h-64 max-w-xs rounded-lg bg-white bg-cover p-6 shadow-lg" src={Udemy} alt="udemy clone" />
        <a href="https://monikarajasekaran.github.io/Udemy-clone/" target="_blank" rel="noopener noreferrer">
      <p class="items-center font-bold p-2 portfolio-highlighter">Visit Website</p>
    </a>         
     </div>
     <div class="flex flex-col items-center ">
     <img class="h-64 max-w-xs rounded-lg bg-white bg-cover p-6 shadow-lg"  src={Weather} alt="Weather App" />
  <a href="https://actodo-three.vercel.app/" target="_blank" rel="noopener noreferrer">
      <p class="items-center font-bold p-2 portfolio-highlighter">Visit Website</p>
    </a>            </div>
    <div class="flex flex-col items-center ">
    <img class="h-64 max-w-xs rounded-lg bg-white bg-cover p-6 shadow-lg"  src={Nostra} alt="Nostra Ecommerce" />
  <a href="https://monikarajasekaran.github.io/Nosta-Ecommerce/" target="_blank" rel="noopener noreferrer">
      <p class="items-center font-bold p-2 portfolio-highlighter">Visit Website</p>
    </a>            </div>
    <div class="flex flex-col items-center ">
    <img class="h-64 max-w-xs rounded-lg bg-white bg-cover p-6 shadow-lg"  src={Greenden} alt="Greenden" />
  <a href="https://monikarajasekaran.github.io/Greenden-Tailwindcss/" target="_blank" rel="noopener noreferrer">
      <p class="items-center font-bold p-2 portfolio-highlighter">Visit Website</p>
    </a>            </div>
    <div class="flex flex-col items-center ">
    <img class="h-64 max-w-xs rounded-lg bg-white bg-cover p-6 shadow-lg"  src={Triadvisor} alt="Triadvisor" />
  <a href="https://monikarajasekaran.github.io/Tripadvisor-clone/" target="_blank" rel="noopener noreferrer">
      <p class="items-center font-bold p-2 portfolio-highlighter">Visit Website</p>
    </a>            </div>
    <div class="flex flex-col items-center ">
            <img class="h-64 max-w-xs rounded-lg bg-white bg-cover p-6 shadow-lg"  src={signup} alt="" />
  <a href="https://actodo-three.vercel.app/" target="_blank" rel="noopener noreferrer">
      <p class="items-center font-bold p-2 portfolio-highlighter">Visit Website</p>
    </a>            </div>
        </div>
    
      </div>
      
    </section>
  )
}
