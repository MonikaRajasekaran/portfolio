import React from 'react';

const experiences = [
   {
      company: "Higglerslab Solutions Private Limited",
      role: "Full Stack Developer",
      period: "Jul 2024 - Present",
      responsibilities: [
         "Develop and maintain end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
         "Build modern, responsive, and user-friendly interfaces using React.js, Tailwind CSS, JavaScript, and reusable UI components.",
         "Design and implement secure backend services, REST APIs, and authentication flows using Node.js, Express.js, JWT, or AWS Cognito.",
         "Work with MongoDB to design schemas, optimize queries, and ensure high data performance and scalability.",
         "Integrate third-party services and APIs to enhance functionality and provide additional features.",
         "Write clean, modular, and maintainable code, following industry standards and best practices.",
         "Optimize application performance and ensure responsiveness across various devices and browsers."
      ]
   },
   {
      company: "Exposure India",
      role: "Full Stack Developer",
      period: "Dec 2022 - June 2023",
      responsibilities: [
         "Develop and maintain robust and scalable web applications using PHP, Sql and other related technologies.",
         "Design and implement front-end interfaces using HTML, CSS, JavaScript, and modern JavaScript frameworks such as React.js.",
         "Optimize application performance and ensure responsiveness across various devices and browsers.",
         "Write clean, well-documented, and testable code following best practices and coding standards.",
         "Stay up-to-date with the latest trends and technologies in web development and propose innovative solutions to enhance our products."
      ]
   },
   {
      company: "Jiametric Technologies",
      role: "Front End Developer",
      period: "April 2017 - May 2019",
      responsibilities: [
         "Develop and maintain user-friendly and visually appealing web interfaces using HTML, CSS, and JavaScript.",
         "Implement responsive designs to ensure optimal user experience across various devices and screen sizes.",
         "Collaborate with designers and back-end developers to translate design mockups and wireframes into functional front-end code.",
         "Optimize website performance by optimizing code, images, and assets for fast loading times.",
         "Write clean, modular, and reusable code following industry best practices and coding standards."
      ]
   }
];

export default function Experience() {
   return (
      <section className="w-full flex justify-center pb-6 my-6" id="experience">
         <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8 px-4 md:px-0">
            {/* Header */}
            <div className="flex gap-6 items-center my-8 justify-center md:justify-start w-full">
               <h2 className="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center text-[#0D43A8]">Experience</h2>
               <div className="w-full h-[2px] bg-[#0D43A8] hidden md:block opacity-20"></div>
            </div>

            <div className="flex flex-col gap-6">
               {experiences.map((exp, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 relative overflow-hidden group">
                     {/* Decorative gradient blob */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-100"></div>

                     <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-100 pb-4">
                           <div>
                              <h3 className="text-xl md:text-2xl font-manrope font-bold text-gray-800 group-hover:text-[#0D43A8] transition-colors">{exp.company}</h3>
                              <p className="text-[#0D43A8] font-semibold text-lg mt-1">{exp.role}</p>
                           </div>
                           <span className="inline-block bg-blue-50 text-[#0D43A8] px-4 py-1.5 rounded-full text-sm font-bold mt-3 md:mt-0 shadow-sm">
                              {exp.period}
                           </span>
                        </div>

                        <div className="mt-4">
                           <p className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Responsibilities</p>
                           <ul className="grid gap-3">
                              {exp.responsibilities.map((item, i) => (
                                 <li key={i} className="flex items-start text-gray-600 text-sm md:text-base leading-relaxed group/item">
                                    <span className="mr-3 mt-2 min-w-[6px] h-[6px] rounded-full bg-gray-300 group-hover/item:bg-[#0D43A8] transition-colors"></span>
                                    <span>{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}