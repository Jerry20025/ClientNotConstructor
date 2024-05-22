import * as pg from 'pg'
const Client=pg.Client
const pgClient = new Client({
    connectionString:"postgresql:neondb_owner:aJ95xAvrLyuk@ep-white-dust-a11wafhn.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});
async function createUsersTable() {
    await pgClient.connect();
    const result=await pgClient.query(`
    CREATE TABLE myuser(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `)
}
createUsersTable();
