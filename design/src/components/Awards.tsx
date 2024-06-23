import Link from 'next/link';

const awards = [
  {
    title: 'Open AI Research Grant 2024',
    description: 'Received a credit grant of $5000 for my submitted proposal in OpenAI Research Program.',
    imageUrl: 'openai.png',
    caseStudyUrl: '#',
  },
  {
    title: "Runner's up in TUM.ai hackathon - Federated Machine Learning 2024",
    description: 'Achieved runner-up position in the TUM.ai hackathon for developing solutions in Federated Machine Learning.',
    imageUrl: 'tumai.png',
    caseStudyUrl: 'https://devpost.com/software/the-dream-team-7uik58#updates'
  },
  {
    title: 'ISMRM Stipend award 2024',
    description: 'Received Stipend award of $675.',
    imageUrl: 'ismrm_stipend.png',
    caseStudyUrl: '#',
  },
  {
    title: 'Merit Scholarship (2016-2020)',
    description: 'Received merit scholarship award for three consecutive years - $3000.',
    imageUrl: 'merit_scholarship.png',
    caseStudyUrl: '#',
  },

];

const Awards: React.FC = () => {
  return (
    <div id='awards' className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Awards</h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {awards.map((award) => (
            <div key={award.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={award.imageUrl} alt={award.title} style={{ objectFit: 'contain' }} />
              </div>
              <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                <div className="flex-1">
                  <div className="block mt-2">
                    <span className="text-xl font-semibold text-gray-300 flex flex-row ">
                      {award.title}

                      { award.caseStudyUrl !== '#' &&
                        <div className="text-[14px] ml-auto ">
                          <Link href={award.caseStudyUrl} target='_blank'>
                            View
                          </Link>
                        </div>
                      }
                    </span>
                    <p className="mt-3 text-base text-gray-300">{award.description}</p>
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

export default Awards;
