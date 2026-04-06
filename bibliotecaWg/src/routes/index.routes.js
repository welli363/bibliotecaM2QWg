const express = require('express');
const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const autenticar = require('../middlewares/auth.middleware')
const contentType = require('../middlewares/contentType.middleware')


// 2. Rota Raiz
router.get('/', (req, res) => {
  res.json({ sistema: 'Biblioteca Ralph & Teddy', status: 'Online' });
});


router.use(autenticar);
router.use(contentType)


//rota de recursos 
router.use('/livros', livrosRoutes);
router.use('/usuarios', usuariosRoutes);


//rota 404
router.use((req, res) => {
  res.status(404).json({erro: 'Rota não encontrada na Biblioteca Ralph & Teddy'})
})


module.exports = router;
