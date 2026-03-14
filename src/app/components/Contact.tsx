import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Obrigado pelo contato! Responderei em breve.');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tem um projeto em mente? Vamos conversar sobre como posso ajudar a torná-lo realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a href="mailto:isabelxis@gmail.com" className="text-lg hover:text-blue-400 transition-colors">
                        isabelxis@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-600 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Telefone</p>
                      <a href="tel:+5585988109889" className="text-lg hover:text-purple-400 transition-colors">
                        +55 85 98810-9889
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-600 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Localização</p>
                      <p className="text-lg">
                        Fortaleza, Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6">
                <h4 className="text-xl mb-4">
                  Disponibilidade
                </h4>
                <p className="text-slate-300 mb-4">
                  Atualmente estou disponível para projetos freelance e oportunidades em tempo integral.
                </p>
                <p className="text-slate-300">
                  Tempo de resposta médio: <span className="text-blue-400">24 horas</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-slate-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                    placeholder="Sobre o que você gostaria de conversar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                    placeholder="Conte-me mais sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
