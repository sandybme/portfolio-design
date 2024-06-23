import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className='relative '>
      <div className="relative flex items-center justify-center h-screen" id="about">
        <div className="text-white px-6 md:px-12">
          <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0"></h2>

          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
              <h2 className="text-2xl font-semibold text-gradient mb-6">About Me</h2>
              <div className="space-y-6">
                <p className="text-gray-200">
                  I am passionate about AI Engineering and Research, with a background in biomedical imaging, computer vision, machine learning, and generative AI. Based in Munich, Germany, I thrive on creating innovative solutions to complex problems.
                  <br /><br />
                  My work spans various domains where I leverage cutting-edge technology to drive progress. I am always eager to learn new things and continuously expand my skill set. Explore my portfolio to see my latest projects and research endeavors.
                </p>

                <h3 className="text-xl font-semibold text-gradient">My Digital Arsenal</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gradient">Programming Languages</h4>
                    <ul className="list-disc pl-5 text-gray-400">
                      <li>Python</li>
                      <li>C</li>
                      <li>Matlab</li>
                      <li>JavaScript</li>
                      <li>C++</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient">Libraries & Frameworks</h4>
                    <ul className="list-disc pl-5 text-gray-400">
                      <li>PyTorch</li>
                      <li>Machine learning libraries</li>
                      <li>Plotting libraries</li>
                      <li>Langchain, llama-index</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient">Specializations</h4>
                    <ul className="list-disc pl-5 text-gray-400">
                      <li>ML - Computer Vision, Deep learning, Generative AI</li>
                      <li>LLMs</li>
                      <li>Medical imaging</li>
                      <li>Classical Algorithms Development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient">Tools & Technologies</h4>
                    <ul className="list-disc pl-5 text-gray-400">
                      <li>Docker</li>
                      <li>Git</li>
                      <li>CI/CD</li>
                      <li>AWS</li>
                      <li>Linux - bash</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient">Others</h4>
                    <ul className="list-disc pl-5 text-gray-400">
                      <li>Data Analysis</li>
                      <li>Data Engineering</li>
                      <li>Android Studio (Java)</li>
                      <li>Blender 3D</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-transparent border hover:bg-white hover:text-black font-bold py-2 px-4 rounded hover:border-none">
                    <Link href='https://drive.google.com/file/d/1BqUaFVUGCzrrskflvcJ8LLzUkxjImwDr/view?usp=sharing' target='_blank'>
                      Resume
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
