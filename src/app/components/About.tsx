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
                Sou desenvolvedora Full Stack com formação em Sistemas de Informação pela Faculdade 7 de Setembro (2014) e especialização em Engenharia de Software com ênfase em Padrões de Software pela Universidade Estadual do Ceará (UECE). Minha trajetória na área de tecnologia começou como assistente de TI, evoluindo para analista de sistemas e posteriormente para desenvolvedora full stack, consolidando uma base sólida em engenharia de software e desenvolvimento de sistemas
              </p>
              <p className="text-slate-600 mb-6">
                Desde 2019, integro o Sistema FIEC, onde atuo no desenvolvimento de soluções tecnológicas voltadas para a indústria cearense, participando da criação e evolução de sistemas que impactam diretamente processos e operações do setor. Ao longo dessa jornada, adquiri experiência em desenvolvimento full stack, trabalhando com diferentes tecnologias, boas práticas de engenharia e metodologias ágeis, sempre com foco em qualidade, escalabilidade e entrega de valor.
              </p>
              <p className="text-slate-600">
                Tenho grande interesse em arquitetura de software e melhoria contínua, e atualmente estou aprofundando meus conhecimentos em arquitetura de sistemas distribuídos, cloud computing (AWS), pipelines CI/CD e uso de LLMs no desenvolvimento de software.
                Fora do ambiente profissional, gosto de desenvolver projetos pessoais, contribuir com iniciativas open source e me manter em constante aprendizado, explorando novas tecnologias e tendências da área.
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
