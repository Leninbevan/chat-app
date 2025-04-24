import { betterAuth } from 'better-auth';
import pg from 'pg';
const { Pool } = pg;

export const auth = betterAuth({
  database:  new Pool({
    connectionString: "postgres://postgres:postgres@localhost:5432/chatbot",
  }),
  emailAndPassword: {
    enabled: true, 
  }
});