import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-hero.jpg';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-up">
          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 glow-primary animate-cinematic-reveal">
              <img 
                src={profileImage} 
                alt="Bhanu Prakash Bhanuri" 
                className="w-full h-full object-cover"
                style={{ imageRendering: 'auto' }}
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
          
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient">Bhanu Prakash Bhanuri</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Tech Enthusiast
            </p>
          </div>

          {/* Intro Text */}
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I want to start my career in Cloud Computing and use my knowledge of cloud platforms like AWS and IT
            tools. I am excited to learn new skills, get practical experience, and help create useful and reliable cloud
            solutions. My goal is to grow as a cloud professional and support the organization in achieving its business
            goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 glow-secondary transition-all hover:scale-105"
              asChild
            >
              <a href="/Bhanu_ATS_resume_3.pdf" download="Bhanu_Prakash_Bhanuri_Resume.pdf">
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <ArrowDown className="h-6 w-6 text-primary opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
