module.exports = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [
        "./src/db/entities/**/*.ts"
    ],
    migrations: [
        "./src/db/migrations/**/*.ts"
    ],
    cli: {
        migrationsDir: "./src/db/migrations"
    },
};