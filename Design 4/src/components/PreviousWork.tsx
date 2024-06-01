import Link from 'next/link';

const projects = [
  {
    title: 'Sphark Technologies',
    description: 'Developed the website and internal tools for Sphark Technologies, enabling them to efficiently manage their business operations. These tools included expense management, class scheduling, and student management systems, streamlining their processes and enhancing overall productivity.',
    imageUrl: 'work/sphark_technologies.png',
    caseStudyUrl: 'https://www.spharktechnologies.com/'
  },
  {
    title: 'EzKaam',
    description: 'I worked as a freelancer for Ezkaam, where I created a CRM panel and an admin section. Additionally, I built a static website. Ezkaam connects contractors with skilled laborers and helps job-seekers find opportunities effortlessly.',
    imageUrl: 'work/ezkaam.png',
    caseStudyUrl: 'https://www.ezkaam.in/',
  },
  {
    title: 'Dextroware devices',
    description: `Aided an early-stage startup by creating software and a website for their innovative product, dedicated to improving accessibility for challenged individuals. Our solution ensures inclusivity by providing seamless access to the system, empowering users with diverse abilities to navigate and utilize the platform effectively. Together, we're breaking barriers and fostering a more inclusive future.`,
    imageUrl: 'work/dextroware.png',
    caseStudyUrl: '#',
  },
  {
    title: 'This website ✨',
    description: 'Portfolio website built in Next.js 14 to showcase my projects, experience and resume through a cooler way. Checkout the repo for more.',
    imageUrl: 'https://nextjs.org/static/blog/next-14/twitter-card.png',
    caseStudyUrl: 'https://github.com/praveen-crypto/portfolio-design',
  }
];

  const PreviousWork: React.FC = () => {
    return (
      <div id='projects' className="bg-transparent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Previous Projects</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    <div className="block mt-2">
                      <span className="text-xl font-semibold text-gray-300 flex flex-row ">
                        {project.title}

                        { project.caseStudyUrl !== '#' &&
                          <div className="text-[14px] ml-auto ">
                            <Link href={project.caseStudyUrl} target='_blank'>
                              View
                            </Link>
                          </div>
                        }
                      </span>
                      <p className="mt-3 text-base text-gray-300">{project.description}</p>

                      {/* { project.caseStudyUrl !== '#' &&

                        <div className="bg-inherit border w-[30%] mx-[auto] mt-[10%]  text-purple-200 px-4 py-2 rounded shadow hover:bg-gray-100 hover:text-black transition-colors duration-200">
                          <Link href={project.caseStudyUrl} className='text-center' target='_blank'>
                            View
                          </Link>
                          
                        </div> 
                      } */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PreviousWork;
  