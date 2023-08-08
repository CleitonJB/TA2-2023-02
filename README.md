Este projeto é um continuação do projeto desenvolvido na matéria "Gerência de Projetos". O mesmo pode ser acessado originalmente via o seguinte link: [TGP-Usuarios](https://github.com/CleitonJB/TGP-Usuarios).

OBS.: O projeto surge como um trabalho da máteria "Tópicos Avançados 2" do curso "Bacharelado em Sistemas de Informação".

# Sobre o projeto

A finalidade deste projeto é criar um sistema de login, cadastro, autorização e autenticação referência para os termos de segurança e tecnologia. Para isso, a linguagem principal do sistema será o TypeScript e as ferramentas (configurações) que tornam a linguagem em uma referência no mercado de desenvolvimento de software.

## Definição das classes

| # | Nome da classe |
|---|----------------|
| 1 | User           |
| 2 | Role           |
| 3 | Funcionalidade |
| 4 | Autorizacao    |

#### Classe: **User**

A classe **User** é utilizada para armazenar os dados referêntes aos usuários do sistema. A entidade em questão possuirá os seguintes atributos: 

| Nome do atributo | Tipo          |
|------------------|---------------|
| id               | string (HASH) |
| nome             | string        |
| email            | string        |
| senha            | string (HASH) |
| role             | Role          |

#### Classe: **Role**

A classe **Role** é utilizada como referência dos diferentes tipos de usuários que podem existir no sistema, os quais possuem níveis de impacto e responsabilidades (papéis) distintos. A entidade em questão possuirá os seguintes atributos:

| Nome do atributo | Tipo          |
|------------------|---------------|
| id               | string (HASH) |
| descricao        | string        |

#### Classe: **Funcionalidade**

A classe **Funcionalidade** é utilizada para armazenar de forma organizada e centrada todas as funcionalidades referêntes ao sistema As quais os usuários podem realizar baseando-se no seu "role". A entidade em questão possuirá os seguintes atributos:

| Nome do atributo | Tipo          |
|------------------|---------------|
| id               | string (HASH) |
| descricao        | string        |

#### Classe: **Autorizacao**

A classe **Autorizacao** é uma centralização dos benefícios fornecidos pelas entidades "Role" e "Funcionalidade" e que os usuários podem exercer dentro do sistema. A entidade em questão possuirá os seguintes atributos:

| Nome do atributo | Tipo           |
|------------------|----------------|
| id               | string (HASH)  |
| role             | Role           |
| funcionalidade   | Funcionalidade |

## Último teste realizado: 
![08/08/2023](/src/assets/img/2023-08-08%20174119.png)
[08/08/2023](https://drive.google.com/file/d/193MFF_eIYgJGCaQfTMvVq9kbnHnjhaqL/view?usp=drive_link)