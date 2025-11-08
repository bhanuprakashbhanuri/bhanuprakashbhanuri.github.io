import { Heart, Clock, MessageCircle, Users, Lightbulb } from 'lucide-react';

const StrengthsSection = () => {
  const strengths = [
    { name: 'Honesty', icon: Heart },
    { name: 'Punctuality', icon: Clock },
    { name: 'Communication', icon: MessageCircle },
    { name: 'Teamwork', icon: Users },
    { name: 'Adaptability', icon: Lightbulb },
  ];

  return (
    <section id="strengths" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Core Strengths</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={strength.name}
                className="glass-card rounded-2xl px-6 py-4 hover:border-primary/50 transition-all group animate-fade-up hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold text-lg">{strength.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
