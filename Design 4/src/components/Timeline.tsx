import React from 'react';

const experiences = [
  {
    id: 5,
    role: 'Frontend Developer',
    company: 'Alfalgo Technologies (Nexera)',
    date: 'Jan 2024 - Present',
    description: 'As the sole frontend developer, I took ownership of the entire vertical and built a robust and user-friendly trading platform using Next.js. With a keen eye for detail, I meticulously translated complex designs into a seamless user experience.',
  },
  {
    id: 4,
    role: 'Software developer',
    company: 'Cholamandalam Investment and Finance Ltd.',
    date: 'Aug 2024 - Jan 2024',
    description: 'As a Software Developer at Cholamandalam, I led initiatives to enhance applications and solve project challenges. I revived a previously shutdown project, ensuring its successful completion.',
  },
  {
    id: 3,
    role: 'Associate Software Developer',
    company: 'Finforz Technologies',
    date: 'Jan 2021 - Dec 2021',
    description: 'At Finforz, a fintech company, I played a significant role in the development of the SCB auditing tool project. My primary responsibilities included designing and developing the user interface and significantly improving the user experience of the product. Additionally, I collaborated closely with cross-functional teams to ensure seamless integration of new features ensuring the tool met the highest standards of usability and efficiency.' ,
  },
  {
    id: 2,
    role: 'Project Associate',
    company: 'IIT Madras',
    date: 'Aug 2020 - Dec 2021',
    description: 'At IIT Madras, I developed cardiac simulation software from scratch, overseeing the project from design to production release. I built the entire architecture, enhancing the UI and UX to ensure a user-friendly experience.',
  },
  {
    id: 1,
    role: 'Freelance Developer',
    company: 'Dextroware devices, EzKaam',
    date: 'Mar 2020 - Jul 2020',
    description: 'As a freelancer, I worked with two startup companies, Dextroware and Ezkaam. For Dextroware, I built a static website, while for Ezkaam, I developed a CRM and admin page for their dynamic web application.',
  },
  
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
  return (
    <div className={`relative w-full my-6 ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} md:w-2/5 ${side === 'right' ? 'timeline-bg1' : 'timeline-bg2'}`}>
      <div className={`bg-transparent bg-transparent border border-grey rounded-lg p-6 `}>
        <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
        <h4 className="text-purple-300 text-purple-300 mb-4">{experience.company}</h4>
        <p className="text-purple-200 text-purple-200 mb-2">{experience.date}</p>
        <p className="text-black text-white">{experience.description}</p>
      </div>
    </div>
  );
};

const VerticalTimeline: React.FC = () => {
  return (
    <div className="h-auto text-white py-16 bg-transparent" id="work">
      <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
      <div className="container mx-auto px-6">
        <div className="relative w-full">
          <div className="hidden md:block border-l-2 border-purple-600 border-purple-450 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
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
