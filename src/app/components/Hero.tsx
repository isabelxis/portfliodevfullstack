import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import headImage from '../images/profile.png';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-blue-400 text-sm uppercase tracking-wider px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                Desenvolvedor Full Stack
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              Olá, eu sou
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Isabel Xavier
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-xl">
              Desenvolvedora Full Stack focada em performance, boas práticas e na criação de produtos digitais de verdade.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Entre em Contato
              </a>
              <a 
                href="https://github.com/isabelxis" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/isabelxavier/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
              <ImageWithFallback
                src={headImage}
                alt="Isabel Xavier"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <span className="text-sm">Role para baixo</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
