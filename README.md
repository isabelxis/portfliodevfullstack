# Portfolio Dev Full Stack

Projeto de portfolio pessoal desenvolvido com React + Vite, com foco em apresentacao profissional, estudos de caso e canal de contato.

https://isabelxis.github.io/portfliodevfullstack/

## Visao Geral

A aplicacao e uma landing page de portfolio com as secoes:
- Hero (apresentacao e links sociais)
- Sobre (bio e principais habilidades)
- Estudos de Caso (cards com modal de detalhes)
- Contato (informacoes e formulario)
- Footer

## Stack

- React 18
- Vite 6
- TypeScript (arquivos `.tsx`)
- Tailwind CSS 4
- Lucide React (icones)

## Estrutura Principal

```txt
src/
  app/
    App.tsx
    components/
      Hero.tsx
      About.tsx
      CaseStudies.tsx
      Contact.tsx
      Footer.tsx
      figma/
        ImageWithFallback.tsx
    images/
      head.jpg
      profile.png
  main.tsx
  vite-env.d.ts
```

## Como Rodar Localmente

### 1) Instalar dependencias

```bash
npm install
```

### 2) Iniciar ambiente de desenvolvimento

```bash
npm run dev
```

### 3) Gerar build de producao

```bash
npm run build
```

## Scripts

- `npm run dev`: inicia o servidor Vite em modo desenvolvimento
- `npm run build`: gera build de producao

## Personalizacao Rapida

- Conteudo textual: arquivos em `src/app/components/`
- Foto de perfil: `src/app/images/` e referencia no componente `Hero.tsx`
- Links sociais: `Hero.tsx` e `Footer.tsx`
- Cases: lista `caseStudies` em `CaseStudies.tsx`
- Informacoes de contato: `Contact.tsx`

## Origem do Layout

Este projeto foi iniciado a partir de um bundle exportado de design no Figma.

## Licenca

Uso privado/pessoal.
