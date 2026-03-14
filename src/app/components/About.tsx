import { Code2, Database, Palette, Rocket } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Design Systems, Responsive Design',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'DevOps & Cloud',
      description: 'AWS, Docker, CI/CD, Kubernetes',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>

          {/* Biography */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 mb-6">
                Sou um desenvolvedor full stack apaixonado por tecnologia com mais de 5 anos de experiência 
                criando aplicações web modernas e escaláveis. Minha jornada começou quando descobri a programação 
                durante a faculdade e desde então tenho me dedicado a construir soluções que fazem a diferença 
                na vida das pessoas.
              </p>
              <p className="text-slate-600 mb-6">
                Ao longo da minha carreira, trabalhei com startups e empresas consolidadas, sempre focando em 
                entregar produtos de alta qualidade. Acredito que o melhor código é aquele que é simples, 
                mantível e que resolve problemas reais de forma eficiente.
              </p>
              <p className="text-slate-600">
                Quando não estou programando, gosto de contribuir com projetos open source, escrever artigos 
                técnicos e estar sempre aprendendo novas tecnologias. Atualmente, estou focado em aprofundar 
                meus conhecimentos em arquitetura de sistemas distribuídos e machine learning.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
