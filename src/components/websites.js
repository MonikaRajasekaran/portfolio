import Udemy from '../assets/udemy.png';
import Nostra from '../assets/Nostra.png';
import Triadvisor from '../assets/trip-landingpage.png';
import AirbnbClone from '../assets/img1.jpeg';
import Invoiceoverview from '../assets/invoice.jpeg';

export default function Websites() {
  return (
    <section className="w-full flex justify-center pb-6 my-6" id="skills-section">
      <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8 rounded-lg">
        <div
          id="skills"
          className="portfolio-highlighter flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px]"
        >
          <h2 className="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center">
            My Live Projects
          </h2>
          <div className="portfolio-highlighter w-full md:w-full h-[2px] hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 justify-between transition duration-300 mx-4 mb-8">
          <div className="flex flex-col items-center group transform hover:-translate-y-2 transition-all duration-300">
            <img className="h-64 max-w-xs rounded-lg bg-white bg-cover p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300" src={Invoiceoverview} alt="Invoice Management System" />
            <a href="https://invoice-generation-jet.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="items-center font-bold p-2 text-[#0D43A8] hover:underline">Visit Live Website &rarr;</p>
            </a>
          </div>
          <div className="flex flex-col items-center group transform hover:-translate-y-2 transition-all duration-300">
            <img className="h-64 max-w-xs rounded-lg bg-white bg-cover p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300" src={AirbnbClone} alt="BookNest Airbnb Clone" />
            <a href="https://book-nest-azure-three.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="items-center font-bold p-2 text-[#0D43A8] hover:underline">Visit Live Website &rarr;</p>
            </a>
          </div>
          <div className="flex flex-col items-center group transform hover:-translate-y-2 transition-all duration-300">
            <img className="h-64 max-w-xs rounded-lg bg-white bg-cover p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300" src={Udemy} alt="Udemy Clone" />
            <a href="https://monikarajasekaran.github.io/Udemy-clone/" target="_blank" rel="noopener noreferrer">
              <p className="items-center font-bold p-2 text-[#0D43A8] hover:underline">Visit Live Website &rarr;</p>
            </a>
          </div>
          <div className="flex flex-col items-center group transform hover:-translate-y-2 transition-all duration-300">
            <img className="h-64 max-w-xs rounded-lg bg-white bg-cover p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300" src={Nostra} alt="Nostra E-commerce" />
            <a href="https://monikarajasekaran.github.io/Nosta-Ecommerce/" target="_blank" rel="noopener noreferrer">
              <p className="items-center font-bold p-2 text-[#0D43A8] hover:underline">Visit Live Website &rarr;</p>
            </a>
          </div>
          <div className="flex flex-col items-center group transform hover:-translate-y-2 transition-all duration-300">
            <img className="h-64 max-w-xs rounded-lg bg-white bg-cover p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300" src={Triadvisor} alt="TripAdvisor Clone" />
            <a href="https://monikarajasekaran.github.io/Tripadvisor-clone/" target="_blank" rel="noopener noreferrer">
              <p className="items-center font-bold p-2 text-[#0D43A8] hover:underline">Visit Live Website &rarr;</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
