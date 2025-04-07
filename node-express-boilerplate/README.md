# Node Express Boilerplate

node express boilerplate to be reused

## packages

    express
    dotenv

## to setup project

    npm install

## start project

    npm run dev

## stop project

    ctrl + c

## steps

    1. npm init -y
    2. npm install express
    3. npm install dotenv -D
    4. update package.json file to include `dev` command in `scripts` - node --watch index.js
    5. create index.js file with simple express server
    6. create .gitignore file - touch .gitignore && echo "node_modules" > .gitignore && echo ".env" >> .gitignore
