import express from 'express'

import { getfav, createfav } from './database.js'

const app = express()

app.use(express.json())

app.get("/api/favorites", async (req, res) => {
  const notes = await getfav()
  res.send(notes)
})


app.post("/api/getfavorites", async (req, res) => {
  const { title, contents } = req.body
  const note = await createfav(title, contents)
  res.status(201).send(note)
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke 💩')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})