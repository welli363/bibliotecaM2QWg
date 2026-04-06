const contentTypeMiddleware = (req, res, next) => {
    
    const contentType = req.headers['content-type']

    if(!contentType || !content.includes('application/json')){
        return res.status(415).json({
            erro: 'Tipo de mídia não suportado. Use application/json.'
        })
    }

    next();

}

module.exports = contentTypeMiddleware