const errorHandler = (err, req, res, next ) => {
    console.error(`[ERRO] ${req.method} ${req.url}: `, err.message)

    //determina o status - se o erro ja tem um status definidio, usa ele 
    //caso contrário, 500 é o padrão
    const status = err.status || 500

    // responde ao cliente com uma resposta amigavel 
    res.status(status).json({
        erro: err.message || "Erro interno na Biblioteca Ralph & Teddy.",
        caminho: req.url,
    });

}

module.exports = errorHandler;