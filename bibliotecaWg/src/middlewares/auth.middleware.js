//middleware de autenticação: verifica se o solicitante tem permissão
// funciona como o seguraça na porta a biblioteca
//sem crachá, sem entrada


//chave de acesso temporaria - em produção, isso vem de váriavel de ambiente
const CHAVE_ACESSO = 'biblioteca-ralph-teddy'

const autenticar = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    //verificar seo cabeçalho existe
    if (!authHeader){
        return res.status(401).json({
            erro: 'Acesso negado. Crachá de identificação não encontrado',
        })
    }

    const token = authHeader.split(' ')[1];

    //valida o token
    if( token !== CHAVE_ACESSO){
        return res.status(403).json({
            erro: 'Acesso proibido. Crachá inválido ou vencido'
        });
    }

    next();
}

module.exports = autenticar
