import HeroImg from '../assets/aboutimage.jpg';

export default function Herosection() {
  return (
    <section className="w-full flex justify-center pb-6 my-6">
      <div className="md:h-[550px] w-full max-w-[1050px] flex justify-between items-center gap-4 md:gap-0 flex-col md:flex-row flex-col-reverse px-4 md:px-0 pb-4 md:pb-0" id="top">
        <div className="h-full w-full md:w-1/2 flex justify-center md:justify-start items-center font-rubik">
          <div className="md:max-w-[600px] text-center md:text-left">
            <p className="text-portfolio-text-medium text-sm md:text-xl font-semibold mb-1 mt-2 md:mt-0">Hi, my name is</p>
            <h1 className="text-portfolio-highlighter text-3xl md:text-5xl font-manrope font-black mb-2 md:mb-4">Monika Rajasekaran</h1>
            <p className="text-portfolio-text-light text-xs md:text-base font-normal leading-relaxed">
              Senior Full Stack &amp; Frontend Developer with 5+ years of experience engineering scalable, high-performance web applications using React, Next.js, Node.js, and the MERN stack.
            </p>
            <div className="text-portfolio-text-medium flex flex-col md:flex-row items-center gap-2 text-sm md:text-lg font-medium mt-4"></div>
            <div className="bg-portfolio-secondary text-white rounded-[20px] flex gap-y-2 md:gap-0 justify-around items-center mt-6 min-h-[100px] p-2 md:p-0 shadow-md">
              <div className="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                <span className="text-3xl md:text-5xl font-bold">5+</span>
                <p className="text-[8px] md:text-[12px] w-max px-3 font-semibold tracking-wider">YEARS<br className="block md:hidden" /> EXPERIENCE</p>
              </div>
              <div className="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                <span className="text-3xl md:text-5xl font-bold">10+</span>
                <p className="text-[8px] md:text-[12px] w-max px-3 font-semibold tracking-wider">PRODUCTION<br className="block md:hidden" /> PROJECTS</p>
              </div>
              <div className="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                <span className="text-3xl md:text-5xl font-bold">100%</span>
                <p className="text-[8px] md:text-[12px] w-max px-3 font-semibold tracking-wider">SCALABLE &amp;<br className="block md:hidden" /> RESPONSIVE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full md:w-1/2 flex justify-center md:justify-end items-center relative">
          <div className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] relative flex justify-center items-center rounded-full">
            <div className="_image-container object-contain rounded-full">
              <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}>
                <img
                  src={HeroImg}
                  decoding="async"
                  data-nimg="fill"
                  className="_image duration-700 ease-in-out grayscale-0 blur-0 scale-100 rounded-full"
                  style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                  alt="Monika Rajasekaran Profile"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
