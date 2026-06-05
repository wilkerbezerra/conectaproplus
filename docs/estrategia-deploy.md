# Estratégia de Deploy do ConectaPro+

## Objetivo

Definir e documentar a estratégia de implantação do sistema ConectaPro+, considerando a arquitetura utilizada durante o desenvolvimento e as práticas adotadas ao longo do projeto.

## Tecnologias Utilizadas

O ConectaPro+ foi desenvolvido utilizando as seguintes tecnologias:

* Node.js
* Express.js
* MongoDB Atlas
* Docker
* GitHub
* GitHub Actions
* Render

## Arquitetura de Implantação

A estratégia de deploy adotada utiliza serviços em nuvem para hospedagem da aplicação e do banco de dados.

| Componente                        | Solução Utilizada |
| --------------------------------- | ----------------- |
| Controle de Versão                | GitHub            |
| Integração Contínua               | GitHub Actions    |
| Aplicação Web                     | Node.js + Express |
| Hospedagem da Aplicação           | Render            |
| Banco de Dados                    | MongoDB Atlas     |
| Containerização (Desenvolvimento) | Docker            |

### Arquitetura Final

```text
Usuário
   │
   ▼
Render (Node.js + Express)
   │
   ▼
MongoDB Atlas
```

## Fluxo de Deploy

1. O desenvolvedor realiza alterações na branch de desenvolvimento.
2. As alterações são enviadas para o repositório GitHub.
3. O GitHub Actions executa automaticamente o pipeline de Integração Contínua.
4. O pipeline instala as dependências do projeto e executa os testes automatizados.
5. Após a validação do pipeline, as alterações podem ser integradas à branch principal.
6. O Render detecta automaticamente novas alterações na branch configurada.
7. O serviço é reconstruído e publicado automaticamente.
8. A aplicação conecta-se ao banco de dados MongoDB Atlas através de variáveis de ambiente.

## Justificativa da Escolha

O GitHub foi utilizado para controle de versão, colaboração entre os integrantes da equipe e rastreabilidade das alterações realizadas durante o desenvolvimento.

O GitHub Actions foi adotado para automatizar a execução dos testes, garantindo que alterações sejam verificadas antes de serem integradas ao projeto.

O Docker foi utilizado durante o desenvolvimento para disponibilizar um ambiente local padronizado e facilitar a execução do MongoDB.

O MongoDB Atlas foi adotado como solução de banco de dados em nuvem, eliminando a dependência de infraestrutura local e aumentando a disponibilidade dos dados.

O Render foi escolhido para hospedagem da aplicação por oferecer integração simples com GitHub, deploy automatizado e suporte nativo para aplicações Node.js.

## Benefícios da Estratégia

* Hospedagem em nuvem da aplicação e do banco de dados.
* Integração com controle de versão e CI/CD.
* Deploy automatizado.
* Redução de dependências locais.
* Maior disponibilidade da aplicação.
* Facilidade de manutenção e evolução do sistema.
* Arquitetura mais próxima de um ambiente real de produção.

## Implantação Realizada

Durante o desenvolvimento do ConectaPro+, a estratégia inicialmente planejada para implantação foi efetivamente executada.

A aplicação foi publicada na plataforma Render utilizando a branch `desenvolvimento` do repositório GitHub do projeto.

Para a implantação foram configurados:

* Ambiente Node.js;
* Variáveis de ambiente da aplicação;
* Integração com o banco de dados MongoDB Atlas;
* Deploy automático a partir do repositório GitHub.

Após a publicação, a aplicação recebeu uma URL pública, permitindo acesso externo ao sistema sem a necessidade de execução local.

A implantação foi validada através de testes de autenticação, acesso ao portal de cursos e integração com o banco de dados em nuvem.

## Conclusão

A estratégia de deploy adotada permitiu a implantação completa do ConectaPro+ em ambiente de nuvem, utilizando Render para hospedagem da aplicação e MongoDB Atlas para persistência dos dados.

A solução implantada demonstrou estabilidade durante os testes realizados, atendendo aos objetivos do projeto e aproximando a aplicação de um cenário real de produção.
