# Migração do Banco de Dados para MongoDB Atlas

## Objetivo

Este documento registra a migração do banco de dados do projeto ConectaPro+ de um ambiente local baseado em Docker para uma infraestrutura em nuvem utilizando MongoDB Atlas.

A mudança foi realizada com o objetivo de eliminar a dependência de banco de dados local, aumentar a disponibilidade da aplicação e preparar o sistema para futuras etapas de implantação em ambiente de produção.

---

## Situação Anterior

Inicialmente, o projeto utilizava uma instância MongoDB executada localmente através de um container Docker.

Arquitetura anterior:

```text
Aplicação Node.js
        │
        ▼
MongoDB em Container Docker Local
```

Embora adequada para desenvolvimento, essa abordagem exigia que o banco estivesse disponível na máquina local para que a aplicação funcionasse corretamente.

---

## Nova Arquitetura

Após a migração, a aplicação passou a utilizar o MongoDB Atlas como banco de dados principal.

Arquitetura atual:

```text
Aplicação Node.js
        │
        ▼
MongoDB Atlas (Nuvem)
```

Com essa alteração, os dados ficam armazenados em uma infraestrutura gerenciada na nuvem, reduzindo dependências locais e aproximando o ambiente de desenvolvimento de um cenário real de produção.

---

## Atividades Executadas

### 1. Criação do Cluster no MongoDB Atlas

Foi criado um cluster MongoDB Atlas para hospedar o banco de dados do projeto.

Também foram configurados:

* usuário de acesso ao banco;
* permissões de leitura e escrita;
* regras de acesso de rede;
* string de conexão da aplicação.

### 2. Configuração da Aplicação

A string de conexão foi movida para variável de ambiente através do arquivo `.env`.

Exemplo:

```env
MONGODB_URI=<string de conexão MongoDB Atlas>
```

Essa abordagem evita que credenciais sejam armazenadas diretamente no código-fonte.

### 3. Criação do Banco de Dados

Foi criado o banco de dados:

```text
conectaproplus
```

com as collections:

```text
users
courses
```

### 4. Migração dos Cursos

Os cursos existentes foram migrados para o MongoDB Atlas utilizando um script de seed desenvolvido para popular automaticamente a collection `courses`.

Foram migrados:

* Curso de Espetinho;
* Curso de Geladinho Gourmet;
* Curso de Comunicação e Oratória;
* Curso de Informática;
* Curso de Saladeiro Profissional.

### 5. Validação da Aplicação

Após a migração foram realizados testes funcionais para garantir o correto funcionamento da aplicação.

Testes executados:

* Cadastro de usuários;
* Login;
* Logout;
* Persistência de sessão;
* Exibição dos cursos;
* Acesso às aulas;
* Navegação entre páginas.

Todos os testes foram concluídos com sucesso.

---

## Integração Contínua

Após a migração do banco de dados, o pipeline de Integração Contínua configurado com GitHub Actions continuou funcionando normalmente.

Foi realizado commit das alterações, envio para o repositório remoto e validação automática através do workflow CI do projeto.

---

## Benefícios Obtidos

A migração para MongoDB Atlas trouxe os seguintes benefícios:

* Eliminação da dependência de banco de dados local;
* Maior disponibilidade dos dados;
* Facilidade de implantação futura;
* Arquitetura mais próxima de ambientes reais de produção;
* Simplificação da configuração de hospedagem;
* Melhor escalabilidade da solução.

---

## Evidências Coletadas

Durante a atividade foram registradas evidências para compor o relatório final do projeto:

* MongoDB Atlas exibindo o banco `conectaproplus`;
* Collections `users` e `courses`;
* Aplicação funcionando após a migração;
* GitHub Actions executando com sucesso;
* Histórico de commits da migração.

---

## Conclusão

A migração do banco de dados para o MongoDB Atlas foi concluída com sucesso, permitindo que o ConectaPro+ utilize uma infraestrutura em nuvem para armazenamento de dados.

A aplicação permaneceu estável após a mudança, mantendo todas as funcionalidades essenciais operacionais e ficando preparada para futuras etapas de implantação e disponibilização pública.
