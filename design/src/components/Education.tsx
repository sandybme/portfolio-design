import React from 'react';
import Image from 'next/image';

const experiences = [
 
  {
    id: 2,
    role: 'M.Sc Biomedical Engineering and Medical Physics Focus: Imaging, AI',
    company: 'Technical University Munich',
    date: 'Oct 2021 - Dec 2023',
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>GPA: 1.3 (Top 1%)</li>
        <li>Thesis: Complex-valued deep learning based denoising for gradient echo MR images for high-resolution 
        quantitative susceptibility mapping</li>
        <li><a href="https://drive.google.com/file/d/1XbgVekG-iglDMAmsVuRLnOL5dC9V5Yxh/view?usp=sharing" target="_blank" style="color: #1e90ff; text-decoration: underline;">Click here to read about the thesis</a></li>
      </ul>
    `,
    logo: '/tum_logo.png',
  },
  {
    id: 1,
    role: 'B.E Biomedical Engineering',
    company: 'SSN College of Engineering, Anna University',
    date: '2016 - 2020',
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>University Rank 2/480 students.</li>
        <li>Thesis: Modelling of Human Vocal Folds and Systematic Investigation of their Vibrations from Kymogram.</li>
        <li><a href="https://www.researchgate.net/publication/347868877_Modelling_of_Human_Vocal_Folds_and_Systematic_Investigation_of_their_Vibrations_from_Kymogram" target="_blank" style="color: #1e90ff; text-decoration: underline;">Click here to read about the thesis</a></li>
      </ul>
    `,
    logo: '/ssn_logo.png',
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
    <div className="h-auto text-white py-16 bg-transparent" id="education">
      <h2 className="text-3xl font-bold mb-16 text-center">Education</h2>
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
