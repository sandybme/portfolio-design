import React from 'react';
import Image from 'next/image';

const experiences = [
  {
    id: 5,
    role: 'AI Engineer - Full-time Internship',
    company: 'BMW',
    date: 'Jun 2024 - Present',
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Integrating Gen AI use cases in design engineers' workflow.</li>
        <li>Developing Smart Archive system for design retrieval.</li>
        <li>Developing Smart Design Fusion and style transfer.</li>
      </ul>
    `,
    logo: '/bmw_logo.jpg',
  },
  {
    id: 4,
    role: 'ML Engineer | Data Scientist - Consultant',
    company: 'Hexo',
    date: 'Jan 2023 - Present',
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Developed trademark logo image similarity search system.</li>
        <li>Established vector database and image retrieval functionalities.</li>
        <li>Developed prompt-driven background generation model.</li>
      </ul>
    `,
    logo: '/hexo_logo.svg',
  },
  {
    id: 3,
    role: 'AI Engineer - Working Student',
    company: 'BMW Group',
    date: 'Nov 2023 - Mar 2024',
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Developed deep learning-based classification model.</li>
        <li>Researched and implemented diffusion models for 3D designs.</li>
        <li>Developed multi-shot 3D easter-egg mesh models.</li>
      </ul>
    `,
    logo: '/bmw_logo.jpg',
  },
  {
    id: 2,
    role: 'Research Assistant - Machine Learning',
    company: 'Klinikum rechts der Isar, Technical University Munich',
    date: 'Dec 2022 - Oct 2023',
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Developed and deployed dockerized AI models for clinicians.</li>
        <li>Managed patient study databases for seamless AI integration.</li>
        <li>Created comprehensive whole-body MR datasets.</li>
        <li>Performed advanced image and 3D processing techniques.</li>
        <li>Conducted GRE scan protocols for QSM and denoising applications.</li>
      </ul>
    `,
    logo: '/mri_tum.png',
  },
  {
    id: 1,
    role: 'Python Developer',
    company: 'European Union: ENSNARE Project, Technical University Munich',
    date: 'May 2022 - Sep 2022',
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Automated 3D model development from 2D images using OpenCV.</li>
        <li>Built Python-based plugins for FreeCAD.</li>
        <li>Optimized 3D model construction process, enhancing workflow efficiency.</li>
        <li><a href="https://www.iaarc.org/publications/2023_proceedings_of_the_40th_isarc_challenges_of_the_transformational_age/" target="_blank" style="color: #1e90ff; text-decoration: underline;">Click here for the project</a></li>
      </ul>
    `,
    logo: '/tum_logo.png',
  }
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
  return (
    <div className={`relative w-full my-6 ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} md:w-2/5 ${side === 'right' ? 'timeline-bg1' : 'timeline-bg2'}`}>
      <div className={`bg-transparent border border-grey rounded-lg p-6`}>
        {experience.logo && (
          <div className="flex items-center mb-4">
            <Image src={experience.logo} alt={`${experience.company} Logo`} width={48} height={48} className="mr-4" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
          <h4 className="text-purple-300 mb-4">{experience.company}</h4>
          <p className="text-purple-200 mb-2">{experience.date}</p>
        </div>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: experience.description }} />
      </div>
    </div>
  );
};

const VerticalTimeline: React.FC = () => {
  return (
    <div className="h-auto text-white py-16 bg-transparent mt-[22rem] sm:mt-0" id="work">
      <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
      <div className="container mx-auto px-6">
        <div className="relative w-full">
          <div className="hidden md:block border-l-2 border-purple-600 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
