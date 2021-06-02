/* Archivo para la configuracion de mi servidor de express*/
import express from 'express'
import employeeRoutes from './routes/employee.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(express.json());

app.get('/api', (req, res) => {
    res.json('welcome')
})

app.use('/api/employees', employeeRoutes)
app.use('/api/auth', authRoutes)

export default app;