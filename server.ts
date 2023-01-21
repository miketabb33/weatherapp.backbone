import express, { Request, Response } from 'express'

const app = express()

const port = 3000

app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
