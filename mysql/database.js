import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

async function getfav(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM favorites
    WHERE id = ${id}
    `)
    return rows
  }
export async function createfav(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO favorites (title)
    VALUES (?)
    `, [title])
    return result
  }
  
  const fav = await getfav(1)
  console.log(fav)
