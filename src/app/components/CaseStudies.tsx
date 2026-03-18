import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import proj01Image from '../images/geradorqrcode.png';
import proj02Image from '../images/belbook.png';
import proj03Image from '../images/sucocubano.png';

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Bel Bookstore',
      subtitle: 'Plataforma de venda de livros online',
      description: 'Site simples e responsivo para venda de livros pessoais',
      image: proj02Image,
      tags: ['JavaScript', 'CSS', 'HTML', 'Docker', 'AWS EC2'],
      challenge: 'Eu estava precisando vender meus livros e então criei em uma tarde essa página responsiva simples para exibir livros à venda.',
      solution: 'Cada livro mostra nome, autor, preço, status, estado e foto. Há um botão QUERO que, ao ser clicado, abre um modal para o comprador informar nome e mensagem. Quando o formulário é enviado, uma nova aba do WhatsApp é aberta com mensagem pré-formatada e o status do livro muda para Vendido e o botão fica inativo.',
      results: [
        'Site funcional e responsivo para venda de livros pessoais',
        'Integração com WhatsApp para facilitar a comunicação entre comprador e vendedor',
        'Gerenciamento de status dos livros para evitar vendas duplicadas'
      ],
      tech: ['JavaScript', 'CSS', 'HTML', 'Docker', 'AWS EC2'],
      liveUrl: 'http://3.140.196.206:3000/',
      githubUrl: 'https://github.com/isabelxis/belbook'
    },
    {
      id: 2,
      title: 'Suco Cubano',
      subtitle: 'Plataforma de venda de drinks online',
      description: 'Site simples e responsivo para vendas de drinks',
      image: proj03Image,
      tags: ['JavaScript', 'CSS', 'HTML'],
      challenge: 'Uma amiga precisava se um site simples para venda de drinks para os lojistas e compradores em uma feira muito movimentada em Fortaleza',
      solution: 'Construí a plataforma responsiva onde os clientes realizam os pedidos e o pedido chegava ao whatsapp da loja e era realizado a entrega do drink na barraca do cliente',
      results: [
        'Mais controle no pedido',
        'Comodidade para os cliente',
        'Tornou o negócio mais profissional'
      ],
      tech: ['JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://isabelxis.github.io/sucocubano/',
      githubUrl: 'https://github.com/isabelxis/sucocubano'
    },
    {
      id: 3,
      title: 'Gerador de QR Code',
      subtitle: 'Página web de geração e leitura de códigos QR',
      description: 'Página web para criar e escanear códigos QR, com funcionalidades de personalização e compartilhamento.',
      image: proj01Image,
      tags: ['JavaScript', 'Node.js', 'Java', 'Spring Boot', 'S3','Docker'],
      challenge: 'Criar uma solução web eficiente para geração e leitura de códigos QR, com interface intuitiva e desempenho consistente.',
      solution: 'Desenvolvi uma aplicação web moderna utilizando JavaScript no frontend e Java Spring Boot no backend. Implementei uma API RESTful para gerenciar os códigos QR e utilizei bibliotecas especializadas para a leitura e geração de imagens.',
      results: [
        'Em teste',
      ],
      tech: ['JavaScript', 'Java', 'Spring Boot', 'S3', 'Docker'],
      liveUrl: 'https://isabelxis.github.io/qrcode_generator/',
      githubUrl: 'https://github.com/isabelxis/qrcode_generator'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Estudos de Caso
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Confira alguns dos projetos que tive o prazer de desenvolver e os resultados alcançados
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCase(study)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {study.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8">
            {/* Close Button */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10">
              <h3 className="text-2xl">
                {selectedCase.title}
              </h3>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-6">
                <ImageWithFallback
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Description */}
              <p className="text-lg text-slate-600 mb-8">
                {selectedCase.description}
              </p>

              {/* Challenge */}
              <div className="mb-8">
                <h4 className="text-xl mb-3 text-slate-900">
                  Desafio
                </h4>
                <p className="text-slate-600">
                  {selectedCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h4 className="text-xl mb-3 text-slate-900">
                  Solução
                </h4>
                <p className="text-slate-600">
                  {selectedCase.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-xl mb-3 text-slate-900">
                  Resultados
                </h4>
                <ul className="space-y-2">
                  {selectedCase.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-green-500 mt-1">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl mb-3 text-slate-900">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={selectedCase.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Ver Projeto
                </a>
                <a
                  href={selectedCase.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
