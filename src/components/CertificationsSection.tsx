import { Award, Shield, Car } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner Certificate (CLF-C02)',
      organization: 'Amazon Web Services',
      icon: Award,
      color: 'primary',
    },
    {
      title: 'AWS re/start certificate',
      organization: 'Tech Mahindra SMART academy Hyderabad',
      icon: Award,
      color: 'secondary',
    },
    {
      title: 'Cloud Application Developer',
      organization: 'NSDC',
      icon: Award,
      color: 'primary',
    },
    {
      title: 'AI-ML Virtual Internship',
      organization: 'AICTE & AWS',
      icon: Award,
      color: 'secondary',
    },
    {
      title: 'Cyber Security Virtual Internship',
      organization: 'AICTE',
      icon: Shield,
      color: 'primary',
    },
    {
      title: 'Electric Vehicles and Mobility',
      organization: 'Coursera',
      icon: Car,
      color: 'secondary',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Certifications & Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="glass-card rounded-xl p-8 hover:border-primary/50 transition-all group text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-full ${
                  cert.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                } mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${
                    cert.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.organization}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
