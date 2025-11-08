import { Mail, Linkedin, Send, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Let's Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up">
            <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:bhanuprakashbhanuri@gmail.com"
                    className="font-semibold hover:text-primary transition-colors break-all"
                  >
                    bhanuprakashbhanuri@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 hover:border-secondary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-all">
                  <Linkedin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/bhanu-prakash-bhanuri-bbb244201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-secondary transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/bhanuprakashbhanuri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-primary transition-colors"
                  >
                    View My Projects
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-xl p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-muted/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
