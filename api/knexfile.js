require("dotenv").config({path: ".env.local"});

module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        seeds: {
            directory: "./seeds/build/seeds"
        }
    }
};
