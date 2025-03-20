import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' })
})

app.listen(3000, () => console.log('✅ Backend running on http://localhost:3000'))
