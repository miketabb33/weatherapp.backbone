import express, { Request, Response } from 'express'
import fs from 'fs'

const app = express()

const port = 3000

app.use(express.static('dist'))

app.get('*', (req: Request, res: Response) => {
  const errorPage = fs.readFileSync('./errorPage.html').toString()
  res.send(errorPage)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
