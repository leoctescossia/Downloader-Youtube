
const express = require('express');
const url = require('./java');
const app = express()




app.use(express.static('pagina-web'))




app.get('/', function (req, res) {

  res.sendFile(__dirname + "/pagina-web/index.html")
  const url = req.link.url_1
  res.send(url)
  
  //const {url} = req.query.link_valido

  
})

app.listen(3000, () => {
  console.log('servidor rodando')
});
