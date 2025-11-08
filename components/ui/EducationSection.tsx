import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Electrical & Electronics Engineering',
      institution: 'Vignana Bharathi Institute of Technology',
      period: '2020 – 2024',
      cgpa: '6.61',
    },
    {
      degree: 'Intermediate in MPC',
      institution: 'Board of Intermediate Education',
      period: '2018 – 2020',
      cgpa: '9.01',
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Board of Secondary Education',
      period: '2017 – 2018',
      cgpa: '7.80',
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex items-center gap-8 animate-fade-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-20 md:ml-0`}>
                  <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all group">
                    <div className="flex items-start gap-4 md:justify-end">
                      <div className={`${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        <div className="p-3 rounded-lg bg-primary/10 inline-block group-hover:bg-primary/20 transition-all">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-primary font-semibold">CGPA: {edu.cgpa}</span>
                          <span className="text-muted-foreground">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
