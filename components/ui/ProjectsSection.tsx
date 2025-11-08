import { Server, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="space-y-6">
          {/* Project 1 */}
          <div className="glass-card rounded-2xl p-8 md:p-12 hover:border-primary/50 transition-all group animate-fade-up">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all">
                <Server className="h-8 w-8 text-primary" />
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                  Resume Ops-AWS Static Resume & View-Tracking
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Engineered and deployed a production static resume site on AWS (S3, CloudFront, Route 53, ACM) and 
                  containerized a Go (Gin) view-tracking API with Docker and DynamoDB.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['AWS', 'S3', 'CloudFront', 'Route 53', 'Go', 'Docker', 'DynamoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-muted border border-primary/30 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 group/btn"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-card rounded-2xl p-8 md:p-12 hover:border-primary/50 transition-all group animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-all">
                <Server className="h-8 w-8 text-secondary" />
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-secondary transition-colors">
                  Smart Energy Storage and Management in PV Cells Including EV
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Designed a smart energy management system integrating PV cells with electric vehicle infrastructure. 
                  Focused on optimizing solar energy use and managing EV charging loads efficiently. 
                  Improved energy efficiency and promoted renewable energy integration.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['MATLAB', 'Energy Management', 'PV Cells', 'EV Infrastructure', 'Renewable Energy'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-muted border border-secondary/30 text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 group/btn"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
