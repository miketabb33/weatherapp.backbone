import express, { Request, Response } from 'express'
import path from 'path'
const app = express()

const port = 3000

app.get('/', (res: Request, req: Response) => {
  req.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
