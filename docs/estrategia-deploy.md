# Estratégia de Deploy do ConectaPro+

## Objetivo

Definir uma estratégia de implantação para o sistema ConectaPro+, considerando a arquitetura utilizada durante o desenvolvimento e as práticas adotadas ao longo do projeto.

## Tecnologias Utilizadas

O ConectaPro+ foi desenvolvido utilizando as seguintes tecnologias:

* Node.js
* Express.js
* MongoDB
* Docker
* Docker Compose
* GitHub
* GitHub Actions

## Arquitetura de Implantação

A estratégia de deploy proposta é baseada na utilização de containers Docker para garantir padronização do ambiente e facilitar a implantação da aplicação.

| Componente          | Solução Utilizada           |
| ------------------- | --------------------------- |
| Controle de Versão  | GitHub                      |
| Integração Contínua | GitHub Actions              |
| Aplicação Web       | Node.js + Express           |
| Banco de Dados      | MongoDB em container Docker |
| Containerização     | Docker Compose              |

## Fluxo de Deploy

1. O desenvolvedor realiza alterações na branch de desenvolvimento.
2. As alterações são enviadas para o repositório GitHub.
3. O GitHub Actions executa automaticamente o pipeline de Integração Contínua.
4. O pipeline instala as dependências do projeto e executa os testes automatizados.
5. Após a validação do pipeline, as alterações podem ser integradas à branch principal.
6. A aplicação pode ser implantada em um servidor compatível com Docker e Docker Compose.
7. Os containers da aplicação e do banco de dados são inicializados através do arquivo `docker-compose.yml`.

## Justificativa da Escolha

A utilização do GitHub permite controle de versão, colaboração entre os integrantes da equipe e rastreabilidade das alterações realizadas durante o desenvolvimento.

O GitHub Actions foi adotado para automatizar a execução dos testes, garantindo que alterações sejam verificadas antes de serem integradas ao projeto.

O Docker foi escolhido por permitir que a aplicação execute de forma padronizada em diferentes ambientes, reduzindo problemas de configuração e compatibilidade.

O MongoDB foi executado em container dedicado, facilitando a administração do banco de dados e mantendo isolamento entre os componentes da aplicação.

O Docker Compose foi utilizado para orquestrar os serviços da aplicação e do banco de dados, simplificando a configuração e a inicialização do ambiente.

## Benefícios da Estratégia

* Padronização do ambiente de execução.
* Facilidade de implantação em diferentes máquinas.
* Integração com controle de versão e CI/CD.
* Redução de erros de configuração.
* Maior facilidade de manutenção e evolução do sistema.

## Conclusão

A estratégia adotada atende às necessidades do projeto ConectaPro+, fornecendo uma solução simples, reprodutível e alinhada às boas práticas de desenvolvimento de software, além de facilitar futuras implantações e manutenções da aplicação.
