const logger = ( req, res, next ) => {
    const timestamp = new Date().toISOString();
    const metodo = req.method;
    const url = req.url;


//registra entrada no postode controle
console.log(`[BiBLIOTECA] ${timestamp} | ${metodo} ${url}`);

//CRÍTICO: chama o próximo middleware na cadeia 
// sem esse next(), NENHUMA rota vai funcionar 
next();

};


module.exports = logger;


