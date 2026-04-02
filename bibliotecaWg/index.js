const express = require('express');
const routes = require('./src/routes/index.routes')
const {logger, errorHandler} = require('./src/middlewares/main.middlewares')
const app = express()

app.use(express.json())
app.use(logger);

app.use(routes)

app.use(errorHandler)

const PORT = 3001

app.listen(PORT, () => {
  console.log(`[SERVIDOR]: Biblioteca online em http://localhost:${PORT}`)
})
