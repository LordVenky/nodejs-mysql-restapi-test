import express from 'express';
import employeesRoutes  from './src/routes/employees.routes.js'
import indexRouter from './src/routes/index.routes.js'

const app = express()

// Para que el Servidor entienda los Json que manda el front y la DB
app.use(express.json())

// Importamos los controllers
app.use(indexRouter)
app.use(employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found'})
})

export default app;