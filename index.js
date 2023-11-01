import express from 'express'
import apiRoutes from './routes/apiRoutes.js'


const app = express()
const PORT = 8080

// app.use(express.static('public'))

// traductor
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use('/', apiRoutes)

// Ejecución
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})