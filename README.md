# NodeJS boilerplate

Made by @massaynus

there are branches in each one a different setup for all your needs

please checkout the repo at: <https://github.com/massaynus/node-boilerplate>

## What is this?

This template will make it easy to start writing anything by configuring all the necessary infra out of the box.

it has the abiltity to configure all the following easilly:

- babel and prettier + eslint
- mongoose
- graphql
- redis
- rabbitmq

## Running your code

- the template is docker ready so you could do: `docker-compose up --build` and that would be it!
- you can run `npm run deploy` to just build the code on the machine and run **index.js** directly
- `npm run build` outputs everything built by babel to the **./dist** folder if you need anymore flexibility
