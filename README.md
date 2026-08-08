# Charles Pereira Marcelino Júnior — Personal Portfolio

Portfólio profissional bilíngue desenvolvido para apresentar minha trajetória acadêmica e profissional, competências, experiências, projetos e certificações, com foco em **Análise de Requisitos, Gestão de Projetos, Gestão de Produto e Metodologias Ágeis**.

O projeto foi desenvolvido como uma aplicação Web moderna, responsiva e multipágina, com suporte aos idiomas **Português (PT-BR)** e **Inglês (EN)**, além de temas claro e escuro.

---

## Sobre o Projeto

Este portfólio foi desenvolvido com o objetivo de centralizar minha apresentação profissional em uma experiência digital própria, indo além do formato tradicional de currículo.

A aplicação busca evidenciar tanto minha formação em **Ciência da Computação** quanto minha experiência com:

* Análise e elicitação de requisitos;
* Documentação de requisitos;
* Organização e gerenciamento de backlog;
* Metodologias Ágeis;
* Gestão de Projetos;
* Gestão de Produto;
* Prototipação de interfaces;
* Comunicação entre áreas de negócio e tecnologia.

O projeto também apresenta estudos de caso dos projetos desenvolvidos, permitindo contextualizar não apenas o resultado final, mas também aspectos relacionados ao processo de desenvolvimento.

---

## Funcionalidades

### 🌐 Internacionalização

A aplicação possui suporte completo aos idiomas:

* 🇧🇷 Português Brasileiro (PT-BR)
* 🇺🇸 Inglês (EN)

O idioma pode ser alternado diretamente pelo cabeçalho da aplicação, com a preferência armazenada no navegador.

### 🌓 Tema Claro e Escuro

O usuário pode alternar entre:

* Light Mode
* Dark Mode

A preferência de tema é persistida utilizando `localStorage`.

### 📱 Design Responsivo

A interface foi desenvolvida para diferentes tamanhos de tela:

* Desktop
* Tablet
* Mobile

O menu de navegação também possui comportamento específico para dispositivos móveis.

### 🧭 Navegação Multipágina

A aplicação utiliza rotas independentes para cada área do portfólio:

* Início
* Sobre
* Experiência
* Competências
* Projetos
* Certificações
* Currículo

Também existem aliases de rota em inglês para as páginas principais.

### 📚 Estudos de Caso

O projeto **SIGEBD — Sistema de Escola Bíblica Dominical** possui uma página própria de apresentação, permitindo detalhar o projeto separadamente da listagem geral de projetos.

### 📄 Currículo

A aplicação possui uma página dedicada à apresentação do currículo, incluindo opções para:

* Visualização do documento;
* Abertura do PDF;
* Download do currículo.

---

## Estrutura do Portfólio

```text
/
├── Início
├── Sobre
├── Experiência
├── Competências
├── Projetos
│   └── SIGEBD
├── Certificações
└── Currículo
```

### Início

Apresentação profissional contendo:

* Nome;
* Cargo;
* Resumo profissional;
* Especialidades;
* Chamadas para ação.

As principais áreas de atuação apresentadas são:

* Análise de Requisitos;
* Gestão de Projetos;
* Prototipação de Interfaces;
* Negócio × Tecnologia.

### Sobre

Apresentação da trajetória profissional e acadêmica, objetivos de carreira, valores profissionais, áreas de interesse, formação e idiomas.

### Experiência

Apresentação da experiência profissional, incluindo atuação em Help Desk e atividades relacionadas a requisitos, backlog, prototipação, suporte técnico e tecnologia.

### Competências

As competências são organizadas por categorias, contemplando áreas como:

* Análise de Requisitos;
* Gestão de Projetos;
* Produto;
* Ferramentas;
* Desenvolvimento;
* Soft Skills.

### Projetos

Apresentação dos projetos por meio de cartões contendo informações resumidas e acesso aos respectivos estudos de caso.

### Certificações

Organização das certificações e conhecimentos complementares adquiridos ao longo da formação profissional.

### Currículo

Área destinada à visualização e disponibilização do currículo profissional em PDF.

---

## Stack Tecnológica

### Front-end

| Tecnologia         | Utilização                               |
| ------------------ | ---------------------------------------- |
| **React 19**       | Construção da interface e componentes    |
| **TypeScript 5.7** | Tipagem estática e organização do código |
| **HTML5**          | Estrutura semântica da aplicação         |
| **CSS3**           | Estilização e comportamento visual       |
| **Tailwind CSS 4** | Construção dos estilos e layouts         |
| **React Router 7** | Gerenciamento das rotas e navegação      |
| **Lucide React**   | Ícones da interface                      |
| **Vite 8**         | Ambiente de desenvolvimento e build      |

### Gerenciamento de Estado

O projeto utiliza **React Context API** para gerenciamento de estados globais relacionados principalmente a:

* Idioma selecionado;
* Tema claro/escuro.

As preferências são persistidas no navegador utilizando `localStorage`.

### Formatação

O projeto utiliza **oxfmt** para formatação do código.

---

## Arquitetura da Aplicação

A aplicação utiliza uma organização baseada em páginas, componentes reutilizáveis e contexto global.

```text
src/
├── components/
│   ├── BrandIcons.tsx
│   ├── Footer.tsx
│   └── Header.tsx
│
├── context/
│   └── AppContext.tsx
│
├── i18n/
│   └── translations.ts
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectSIGEBD.tsx
│   ├── Certifications.tsx
│   └── Resume.tsx
│
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

### `components`

Contém elementos reutilizáveis da interface, como cabeçalho, rodapé e ícones de marcas.

### `context`

Responsável pelo estado global da aplicação, incluindo idioma e tema.

### `i18n`

Centraliza os textos da aplicação nos idiomas Português e Inglês.

### `pages`

Contém as páginas independentes que compõem o portfólio.

---

## Internacionalização

A aplicação utiliza uma estrutura própria de traduções baseada em objetos contendo as versões em português e inglês.

Exemplo conceitual:

```ts
{
  pt: 'Projetos',
  en: 'Projects'
}
```

O idioma selecionado é armazenado no `localStorage`, permitindo manter a preferência do usuário entre acessos.

---

## Tema

O sistema possui suporte a Light Mode e Dark Mode.

A alteração do tema é realizada globalmente através do `AppContext`, com aplicação da classe `dark` no elemento raiz do documento.

A preferência também é persistida no navegador.

---

## Responsividade

O layout utiliza classes responsivas para adaptar a interface aos diferentes tamanhos de tela.

Entre os comportamentos implementados estão:

* Navegação desktop;
* Menu mobile;
* Grid responsivo;
* Adaptação de espaçamentos;
* Redimensionamento de elementos;
* Organização vertical de conteúdos em telas menores.

---

## Acessibilidade

O projeto considera aspectos de acessibilidade desde a concepção da interface.

Entre as práticas adotadas ou previstas estão:

* Utilização de elementos semânticos;
* Navegação por teclado;
* Rótulos acessíveis para controles;
* `aria-label` em elementos interativos representados por ícones;
* Contraste adequado entre texto e fundo;
* Adaptação responsiva;
* Compatibilidade com tecnologias assistivas.

A implementação e validação das diretrizes de acessibilidade será aprimorada durante as etapas de desenvolvimento e testes.

---

## Execução Local

### Pré-requisitos

* Node.js
* npm ou pnpm

### Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre no diretório:

```bash
cd <NOME_DO_REPOSITORIO>
```

Instale as dependências:

```bash
pnpm install
```

ou:

```bash
npm install
```

### Ambiente de Desenvolvimento

Execute:

```bash
pnpm dev
```

ou:

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento local.

---

## Build de Produção

Para gerar a versão de produção:

```bash
pnpm build
```

ou:

```bash
npm run build
```

Para visualizar a build localmente:

```bash
pnpm preview
```

---

## Scripts

| Comando        | Descrição                            |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Inicia o ambiente de desenvolvimento |
| `pnpm build`   | Gera a build de produção             |
| `pnpm preview` | Executa uma prévia da build          |
| `pnpm format`  | Formata os arquivos do projeto       |

---

## Documentação do Projeto

Este repositório faz parte de um projeto maior de desenvolvimento de portfólios individuais.

A documentação do projeto contempla etapas como:

* Discovery;
* Visão do Produto;
* Elicitação de Requisitos;
* Prototipação;
* Design;
* Desenvolvimento;
* Sprints;
* Testes;
* Acessibilidade;
* Documentação final.

A documentação completa será evoluída conforme novas versões do portfólio forem desenvolvidas.

---

## Roadmap

* [x] Estrutura inicial do portfólio
* [x] Navegação multipágina
* [x] Suporte PT-BR / EN
* [x] Light Mode / Dark Mode
* [x] Página de projetos
* [x] Estudo de caso do SIGEBD
* [x] Página de certificações
* [x] Página de currículo
* [ ] Implementação completa das diretrizes de acessibilidade
* [ ] Validação de acessibilidade
* [ ] Testes automatizados
* [ ] Publicação da versão final
* [ ] Evolução contínua do conteúdo

---

## 👥 Equipe

Este projeto foi desenvolvido de forma colaborativa, unindo gestão, planejamento e desenvolvimento de software.

| Integrante                           | Responsabilidade                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **Charles Pereira Marcelino Júnior** | Gestão do Projeto, Product Owner, Planejamento, Organização das Sprints, Documentação e Acompanhamento do Desenvolvimento |
| **Gabriel Galvão Soares Silva**      | Desenvolvimento Full Stack                                                                                                |
| **Henrique Gonçalves de Moura**      | Desenvolvimento Full Stack                                                                                                |


---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

Consulte o arquivo `LICENSE` para mais informações.
