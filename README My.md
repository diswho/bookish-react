## Material UI library

```sh
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material --save
```

## Font and Icons

add fonts and icon in public/index.html

```sh
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
```

```sh
<link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons"/>
```

## Set up Cypress

```sh
npm install cypress --save-dev
```

### [Run Cypress]()

```sh
npx cypress open
```

#### config package.json

Add to "scripts"

```sh
"e2e": "cypress run"
```

Run

```sh
npm run e2e
```

## Stub Server

```sh
npm install json-server -global
```

### Run Stub Server

```sh
json-server -w db.json --port 8080
```

### config package

```sh
"stub-server": "json-server -w stub-server/db.json --port 8080"
```

#### run

```sh
npm run stub-server
```

#### run locally

Link Github: [https://github.com/abruzzi/stub-server-for-bookish](https://github.com/abruzzi/stub-server-for-bookish)

```sh
npm install json-server --save-dev
```

##### run

```sh
node server.js
```
