<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# <p align="center">API-Email</p>

## 💻 Sobre o projeto

[ApiEmail](https://github.com/andersonaguia/api-email) é uma API para envio de e-mails utilizando NestJS.

## ⚙️ Funcionalidades

- [x] Enviar um e-mail para vários endereços
---

## :construction: Pré-requisitos
- Ter o [NodeJS](https://nodejs.org/en/) instalado na máquina;
#

## :warning: Configuração da aplicação

1) Configurar seu e-mail do Google para permitir acesso aos apps menos seguros;
2) Utilizar o comando `npm install` para instalar as dependências;
3) Utilizar o `.env_example` como base para o `.env` e colocar as suas configurações;
4) Utilizar o comando `npm run start:dev` para executar a aplicação no ambiente de desenvolvimento.

#
## 💻 Acessando as rotas da aplicação

## Endpoints disponíveis

### Enviar um e-mail para vários endereços
```
POST: http://localhost:3000/mail
Headers: {
	"Content-Type": "application/json"
}
Body: [
	{
		"addresses": [
			"email1@gmail.com", "email2@gmail.com"
		],
		"subject": "Envio de e-mails com NestJS",
		"text": "Você está recebendo um e-mail enviado por uma aplicação desenvolvida em NestJS"
	}
]
```
**Resultado:**
```
{
	"status": 200,
	"headers": {},
	"body": {
		"statusCode": 200,
		"message": "Emails successfully sent"
	}
}
```

#

## 🛠 Tecnologias

[![NodeJS Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white&link=https://nodejs.org/en/)](https://nodejs.org/en/)

[![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/)	

[![NestJS Badge](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white&link=https://nestjs.com/)](https://nestjs.com/)

[![ExpressJS Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white&link=https://expressjs.com/)](https://expressjs.com/)

[![NpmJS Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/)](https://www.npmjs.com/)

[![Insomnia Badge](
https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white&link=https://insomnia.rest/)](https://insomnia.rest/)

[![Prettier Badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E&link=https://prettier.io/)](https://prettier.io/)

## 🦸 Autor
 <b>Anderson Aguiar</b>🚀
 <br />
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/andersonlaguiar/)](https://www.linkedin.com/in/andersonlaguiar/) 

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

Feito com ❤️ por Anderson Aguiar 👋🏽 [Entre em contato!](https://www.linkedin.com/in/andersonlaguiar/)