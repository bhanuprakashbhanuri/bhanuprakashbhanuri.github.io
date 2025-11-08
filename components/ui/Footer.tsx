import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-muted-foreground">
            © 2025 Bhanu Prakash Bhanuri — Built with{' '}
            <span className="text-primary">💙</span> using AI
          </p>

          <Button
            onClick={scrollToTop}
            size="icon"
            className="bg-primary/10 hover:bg-primary/20 border border-primary/30 glow-primary"
          >
            <ArrowUp className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
