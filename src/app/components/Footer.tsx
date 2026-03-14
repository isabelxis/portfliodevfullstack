import { Github, Linkedin, Twitter, Heart, Bot } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl mb-4">
                Isabel Xavier
              </h3>
              <p className="text-slate-400">
                Desenvolvedora Full Stack apaixonada por criar soluções que tornam a tecnologia mais simples e útil para as pessoas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="text-slate-400 hover:text-white transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg mb-4">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
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
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Isabel Xavier. Todos os direitos reservados.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" />, <Bot className="w-4 h-4 text-blue-400" /> e muito café
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}