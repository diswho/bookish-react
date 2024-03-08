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

### Run Cypress

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
