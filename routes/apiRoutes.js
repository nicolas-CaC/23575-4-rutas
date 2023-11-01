import express from 'express';
import path from 'path'

const router = express.Router();
const root = path.resolve();

router.get('/users/:nombre', (req, res) => {
    console.log(req.params.nombre)
    res.json({ nombre: 'nico' })
});

router.get('/productos', (req, res) => {
    console.log(req.query.nombre)
    res.json({ nombre: 'nico' })
});

router.post('/json', (req, res) => {
    console.log(req.body)
    res.json({ nombre: 'nico' })
});

router.post('/form', (req, res) => {
    const { id, nombre } = req.body
    res.json({ id, nombre })
});

router.post('/', (req, res) => {
    res.json({ saludo: 'chau' })
});

router.put('/', (req, res) => {
    res.json({ saludo: 'que onda' })
});

export default router;