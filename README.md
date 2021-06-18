## Base Project with NodeJS, Express, JWT, TSyringe and TypeORM

Steps to run this project:

1. Install Dependencies

```bash
npm install
```

2. Setup database settings inside `ormconfig.json` file

3. Generate Migrations:&nbsp;&nbsp;`User Example`

```bash
npm run typeorm migration:generate -n UserMigration`
```

4. Run migration on your database

```bash
npm run migrations
```

5. Run a server

```bash
npm run start
```

## Example

`/POST user`

```bash
curl --location --request POST 'https://ts-node-base-app.herokuapp.com/user' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "m1theus@github.com",
  "password": "StrongPassword123",
  "firstName": "Matheus",
  "lastName": "Martins",
  "age": 21
}'
```

`/POST auth`

```bash
curl --location --request POST 'https://ts-node-base-app.herokuapp.com/auth' \
--header 'Content-Type: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "m1theus@github.com",
  "password": "StrongPassword123"
}'
```

`/GET user/:id`

```bash
curl --location --request GET 'https://ts-node-base-app.herokuapp.com/user/0a0117d6-f6f4-4a96-a47e-3bfc8d6ee32e' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODk3NTczNTYsImV4cCI6MTU4OTc2MDk1Niwic3ViIjoiMGEwMTE3ZDYtZjZmNC00YTk2LWE0N2UtM2JmYzhkNmVlMzJlIn0.fVgV4Qf7o0-sE-rD1nx6L-ChBABHfiJkIY8Qe2MAVcc'
```

`/DELETE user/:id`

```bash
curl --location --request DELETE 'https://ts-node-base-app.herokuapp.com/user/0a0117d6-f6f4-4a96-a47e-3bfc8d6ee32e' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODk3NTczNTYsImV4cCI6MTU4OTc2MDk1Niwic3ViIjoiMGEwMTE3ZDYtZjZmNC00YTk2LWE0N2UtM2JmYzhkNmVlMzJlIn0.fVgV4Qf7o0-sE-rD1nx6L-ChBABHfiJkIY8Qe2MAVcc'
```

### Dependencies

- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [BCrypt](https://github.com/kelektiv/node.bcrypt.js)
- [JWT](https://jwt.io/)
- [UUIDv4](https://github.com/thenativeweb/uuidv4)
- [Sentry.io](https://sentry.io/)
- [TypeORM](https://typeorm.io/#/)
- [TSyringe](https://github.com/microsoft/tsyringe)
- [Jest](https://jestjs.io/docs/en/getting-started)

### Code Patterns

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Editor Config](https://editorconfig.org/)
