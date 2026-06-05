# Lições Aprendidas no Projeto ConectaPro+

## Objetivo

Este documento apresenta as principais lições aprendidas durante o desenvolvimento e evolução do sistema ConectaPro+, abordando decisões técnicas adotadas, desafios enfrentados, aspectos relacionados à dinâmica da equipe, oportunidades de melhoria e recomendações para futuras versões do projeto.

## Decisões Técnicas Acertadas

Ao longo do projeto, diversas decisões contribuíram para a melhoria da qualidade do sistema e para a evolução da aplicação.

### Migração para Banco de Dados MongoDB

A substituição do armazenamento estático por persistência em banco de dados MongoDB permitiu maior flexibilidade no gerenciamento das informações da plataforma, além de aproximar a aplicação de um cenário real de produção.

### Utilização de Variáveis de Ambiente

A externalização das configurações da aplicação para variáveis de ambiente tornou o sistema mais seguro e preparado para diferentes ambientes de execução, facilitando o deploy em nuvem.

### Refatoração do Código

A criação da função reutilizável `getCourseBySlug` reduziu duplicação de código e melhorou a organização da camada de controle da aplicação.

Também foi realizada a centralização das mensagens de autenticação, aumentando a manutenibilidade do sistema.

### Implementação de Testes Automatizados

A introdução de testes automatizados utilizando Jest trouxe maior confiabilidade às funcionalidades críticas do sistema e reduziu riscos durante futuras alterações.

### Integração Contínua com GitHub Actions

A configuração do pipeline de Integração Contínua possibilitou a execução automática dos testes a cada atualização do repositório, aumentando a qualidade das entregas.

### Hospedagem em Nuvem

A utilização do Render para hospedagem da aplicação e do MongoDB Atlas para persistência dos dados permitiu disponibilizar o sistema em ambiente real de produção, aproximando o projeto das práticas utilizadas pelo mercado.

## Decisões que Poderiam Ter Sido Tomadas Mais Cedo

Durante a execução do projeto foram identificadas algumas práticas que poderiam ter sido adotadas desde as fases iniciais.

### Testes Automatizados

Os testes automatizados foram implementados apenas nas etapas finais do projeto. Caso tivessem sido criados desde o início, teriam reduzido o esforço de validação manual ao longo do desenvolvimento.

### Pipeline de CI/CD

A configuração do GitHub Actions também poderia ter sido realizada anteriormente, permitindo que os testes fossem executados automaticamente durante toda a evolução do sistema.

### Acessibilidade

A auditoria de acessibilidade revelou problemas que poderiam ter sido evitados caso boas práticas de acessibilidade fossem consideradas desde as primeiras versões da aplicação.

### Monitoramento

O planejamento do monitoramento foi realizado após a conclusão do sistema. Definir métricas e indicadores desde o início teria facilitado o acompanhamento da evolução do produto.

## Principais Desafios Enfrentados

Diversos desafios técnicos foram encontrados durante a execução da atividade.

### Configuração do Banco de Dados

A migração da aplicação para MongoDB exigiu adaptação da estrutura de dados e revisão de partes da lógica do sistema.

### Integração com MongoDB Atlas

A configuração do banco em nuvem exigiu ajustes de conexão, gerenciamento de credenciais e configuração correta das variáveis de ambiente.

### Deploy em Produção

A publicação da aplicação no Render demandou adaptações relacionadas à execução da aplicação em ambiente hospedado e à integração com o banco de dados em nuvem.

### Organização do Controle de Versão

A utilização de múltiplas branches exigiu atenção para evitar conflitos e garantir que as funcionalidades fossem integradas corretamente.

### Melhorias de Usabilidade

Problemas relacionados à navegação das páginas de aula, rolagem da interface e visualização do rodapé exigiram diversas validações e ajustes até atingir o comportamento esperado.

## Dinâmica da Equipe

O desenvolvimento do projeto exigiu colaboração entre os integrantes da equipe para análise dos problemas identificados, definição das melhorias prioritárias e validação das soluções implementadas.

A divisão das atividades permitiu que diferentes aspectos do projeto fossem trabalhados simultaneamente, incluindo acessibilidade, qualidade de código, usabilidade, testes, deploy e documentação.

Além disso, a utilização do GitHub facilitou o compartilhamento das alterações realizadas e o acompanhamento da evolução do projeto ao longo do semestre.

## O Que Faríamos Diferente

Após a conclusão do projeto, algumas oportunidades de melhoria foram identificadas para projetos futuros.

### Planejar Acessibilidade Desde o Início

A inclusão dos requisitos de acessibilidade desde a fase de projeto reduziria retrabalho e facilitaria a conformidade com boas práticas de inclusão digital.

### Definir KPIs Mais Cedo

A definição antecipada dos indicadores de desempenho permitiria acompanhar a evolução do produto durante todo o desenvolvimento.

### Adotar Testes Desde as Primeiras Funcionalidades

A criação de testes automatizados desde o início contribuiria para maior estabilidade e segurança durante a implementação de novas funcionalidades.

### Estruturar o Pipeline Mais Cedo

A integração contínua poderia ter sido implementada nas primeiras etapas do projeto, permitindo validações automáticas desde as versões iniciais.

## Recomendações para Futuras Iterações

O ConectaPro+ possui potencial para continuar evoluindo através da implementação de novas funcionalidades e melhorias.

Entre as principais recomendações estão:

- Implementação de recuperação de senha;
- Criação de perfil do aluno;
- Persistência do progresso dos cursos no banco de dados;
- Dashboard administrativo para gestão dos cursos;
- Relatórios de acompanhamento dos alunos;
- Ampliação da cobertura de testes automatizados;
- Implementação de testes de integração;
- Coleta de métricas reais de utilização;
- Sistema de notificações para os usuários;
- Melhorias contínuas de acessibilidade e usabilidade.

## Conclusão

O desenvolvimento do ConectaPro+ proporcionou uma experiência prática completa envolvendo acessibilidade, refatoração de código, otimização de performance, testes automatizados, integração contínua, deploy em nuvem e monitoramento de aplicações.

As atividades realizadas permitiram aplicar conceitos estudados ao longo da disciplina de Transformação Digital, demonstrando a importância da melhoria contínua de produtos digitais e da adoção de boas práticas de engenharia de software.

O projeto evoluiu significativamente em relação à sua versão inicial, tornando-se mais organizado, confiável, acessível, performático e preparado para utilização em um ambiente real de produção.