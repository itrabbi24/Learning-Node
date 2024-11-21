import exp from 'constants'
import express from 'express'

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app;