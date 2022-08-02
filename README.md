# My Store

## Get Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/en/) - Server
- [MySQL](https://www.mysql.com/downloads/) - Relational Database Management System
- [Visual Studio Code](https://code.visualstudio.com/download) - Code Editor
- [Git](https://git-scm.com/downloads) - Git
- [GitHub Desktop](https://desktop.github.com/) - Github Access tool

### 2. Installation

On the command prompt run the following commands:

```cmd
$ git clone https://github.com/learning-zone/my-store.git
$ cd my-store
$ cp .env.example .env (edit it with your secret key and database information)
$ npm install
$ npm run migrate
```

Finally, start and build the application:

```cmd
$ npm run build (For development)
$ npm run build:prod (For production)
```

List of NPM Commands:

```cmd
$ npm run lint       # Linting
$ npm run clean      # Remove dist and node_modules folder and install dependencies
$ npm ls <package-name> # List dependent package
```

### 3. Usage

URL : http://localhost:3000/

Navigate to http://localhost:3000/swagger/ for the API documentation.

### 4. App Credential

```js
Username: pradeep.vwa@gmail.com
Password: P@ssw0rd
```

### 5. Technologies used in project

| Technology | Description                                  |
|------------|----------------------------------------------|
|[Express](http://expressjs.com/)| Web framework for Node.js|
|[Bookshelf](http://bookshelfjs.org/)| JavaScript ORM  for Node.js |
|[Knex](http://knexjs.org/) |SQL Query Builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle|
|[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)|JSON Web Tokens ( jwt )|
|[Winston](https://www.npmjs.com/package/winston)|Logging Library|
|[Joi](https://www.npmjs.com/package/joi) | Object schema validation|
|[swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)| API documentation |
|[swagger-ui](https://www.npmjs.com/package/swagger-ui)| API documentation |
|[React](https://facebook.github.io/react/) | JavaScript library for building user interfaces |
|[Redux](http://redux.js.org/) | Predictable state container |
|[Material-UI](https://material-ui-1dab0.firebaseapp.com/)| A React component library implementing Google's Material Design|
|[Redux Form](http://redux-form.com/8.3.0/)| Redux Form |
|[React-Router](https://reacttraining.com/react-router/)| Declarative routing for React |
|[Axios](https://github.com/mzabriskie/axios) | Promise based HTTP client |
|[dotenv](https://www.npmjs.com/package/dotenv)| Environment configuration |
|[ESLint](http://eslint.org/) | Code linting tool|
|[Prettier](https://www.npmjs.com/package/prettier) | Code formatter|
