import dotenv from 'dotenv';

dotenv.config();

let db = {
    db:process.env.MYSQL_DB as string,
    user:process.env.MYSQL_USER as string,
    password:process.env.MYSQL_PASSWORD as string,
    port:process.env.MYSQL_DB as string,

}

export default db;