import postgres from 'postgres'

const url = `postgresql://neondb_owner:npg_FaKl2ZwsTy8j@ep-delicate-brook-an1yofsv.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`

export const sql = postgres(url, { ssl: 'require'})