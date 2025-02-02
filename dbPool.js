import { createPool } from "mariadb"

const pool = createPool({
    host: "localhost",
    user: "moyotest",
    port: 3306,
    password: "smallmo55*",
    database: "moyotest",
    insertIdAsNumber: true,
    bigIntAsNumber: true
})

export default Object.freeze({
    pool: pool
})
