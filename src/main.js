import express from 'express';

const server = express();
const PORT = 3000;

server.set('views', './views');
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', { title: 'Express' })
})

server.listen(PORT, () => {
    console.log(`Server started at - http://127.0.0.1:${PORT}`);
})