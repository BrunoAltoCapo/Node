const express = require('express');
const path = require('path');

const app = express();

// Establecer el motor de plantillas a EJS
app.set('view engine', 'ejs');
// Establecer la carpeta de vistas
app.set('views', path.join(__dirname, 'vistas'));
// Servir archivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const title = 'Mi Web Mejorada con Express y EJS';
  const description = '¡Esta página fue generada dinámicamente con EJS!';
  res.render('index', { title, description });
});

app.get('/about', (req, res) => {
    const title = 'Mi Web Mejorada con Express y EJS';
    const description = '¡Esta página fue generada dinámicamente con EJS!';
    res.render('about', { title, description });
  });

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
