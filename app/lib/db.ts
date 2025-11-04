import postgres from 'postgres';

require('dotenv').config();

const sql = postgres(`${process.env.POSTGRES_URL}`, {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
})


console.log('Database sql created with config:', {
  connectionString: process.env.POSTGRES_URL,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE
});

const result = sql`SELECT NOW()`
result.then((res: any) => {
  console.log('Database connection test successful:', res[0]);
}).catch((err: any) => {
  console.error('Database connection test failed:', err);
});

//export default connectionPool;
export default sql;
console.log('Verificacion tipo objeto en db.ts ------------------------');
console.log(`Tipo: ----> ${typeof sql} <----`);
console.log('Fin Verificacion tipo objeto en db.ts --------------------');