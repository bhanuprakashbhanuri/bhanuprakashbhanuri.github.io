import { MapPin, GraduationCap, Languages, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const technologies = ['Python', 'AWS', 'MATLAB', 'UiPath', 'Linux', 'Windows'];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 hover:border-primary/50 transition-all">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I'm <span className="text-primary font-semibold">Bhanu Prakash</span> — a recent B.Tech graduate in Electrical and Electronics Engineering (2020–2024) from Vignana Bharathi Institute of Technology.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm passionate about <span className="text-secondary font-semibold">Cloud Computing</span> and <span className="text-secondary font-semibold">Python development</span>. I enjoy learning emerging technologies, working with AWS, and contributing to sustainable, efficient cloud solutions.
          </p>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <GraduationCap className="h-6 w-6 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-semibold">B.Tech (EEE), CGPA 6.61</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Languages className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Languages</p>
                <p className="font-semibold">English, Telugu</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Mail className="h-6 w-6 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-xs md:text-sm">bhanuprakashbhanuri@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Technologies I work with:</p>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-4 py-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
