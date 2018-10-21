


const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



const Sqlclass=require ("./sqlClass.js")

var sql=new Sqlclass();

//console.log(sql.query("SELECT * FROM stocks"))

//var stocks=getStocks()
//console.log(stocks)
 app.get('/stocks', (req, res)=>getStocks(req, res))// {
// //  res.send('user ' + req.params.id);
//   getStocks(req, res)
//   console.log('Stocks')
//   //res.send('Hello world');
// });

//sql.end()


function getStocks(reg,res){
    sql.query("SELECT * FROM stocks").then(results => {
      res.send(results)
      console.log(results);
      //return(data);

    });
}
