import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className='relative '>
      <div className="relative flex items-center justify-center h-screen" id="about">
        <div className="text-white px-6 md:px-12">
          <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0">Hi, my name is Praveen</h2>

          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
              <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
              <div className="space-y-6">
                <p className="text-gray-200">
                  I am a Frontend Developer with a passion for creating seamless user experiences, based out of Chennai, India.
                  As a frontend developer with a keen eye for detail, I specialize in crafting pixel-perfect and intuitive user interfaces.
                  <br />
                  <br />
                  I translate complex requirements into seamless user experiences, prioritizing quality and usability to exceed client expectations consistently.
                </p>
                
                <h3 className="text-xl font-semibold text-white">My Digital Arsenal</h3>
                <div className="flex justify-between items-end ">
                  <ul className="list-disc pl-5 text-gray-400">
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>.Net</li>
                    <li>React</li>
                    <li>NextJs</li>
                    <li>FastAPI</li>
                    <li>Sass</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                  <button className="bg-transparent border hover:bg-white hover:text-black font-bold py-2 px-4 rounded hover:border-none">
                    <Link href='https://drive.google.com/file/d/1AISxsxSmJtkC1M9Nemrjf7oNVOQcySKJ/view?usp=sharing' target='_blank'>
                      Resume
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <svg className="absolute left-[0px] top-[0px] z-[-1]" viewBox="0 0 800 800">
        <defs>
          <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse rx="127.5" ry="184.5" cx="58.48854527148316" cy="363.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
        </g>
      </svg> */}
    </div>
  );
};

export default About;
