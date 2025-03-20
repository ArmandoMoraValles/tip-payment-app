import express from 'express'
import cors from 'cors'
import paymentRoutes from './routes/payments.routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', paymentRoutes)

app.listen(3000, () => console.log('✅ Backend running on http://localhost:3000'))
