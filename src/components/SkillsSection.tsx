import { Code, Cloud, Wrench, Monitor } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 85, icon: Code, color: 'primary' },
    { name: 'AWS', level: 75, icon: Cloud, color: 'secondary' },
    { name: 'MATLAB', level: 70, icon: Wrench, color: 'primary' },
    { name: 'UiPath Studio', level: 65, icon: Monitor, color: 'secondary' },
    { name: 'Microsoft Office', level: 80, icon: Monitor, color: 'primary' },
    { name: 'Linux & Windows', level: 75, icon: Monitor, color: 'secondary' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Skills & Technologies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${skill.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                    <Icon className={`h-6 w-6 ${skill.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
