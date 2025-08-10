const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression());
app.use(express.static('.'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
