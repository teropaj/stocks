var mysql = require('mysql');


 class Sqlclass {
  constructor() {




   this.con = mysql.createConnection({
      host: "localhost",
      user: "stock",
      password: "stock",
      database: "stocks"
    });
  }
end() {this.con.end()}
connect(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO stocks (, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });
};

query(data){
    // let sql = `SELECT * FROM sensor_data`;
    // console.log(sql);
    // con.query("SELECT * FROM sensor_data", function(error, results,fields){
    //   if(error) throw err;
    //   var resultObject = JSON.parse(JSON.stringify(results));
    //   console.log(results);
    // });
      var resultObject;
    //  this.con.connect();

      return new Promise ( (resolve, reject) => {
            this.con.query(data, function (error, result) {
              if (error) reject (error);
              else if (result.length === 0) resolve("No records found")
              else {
              resolve(JSON.stringify(result));
              }

            });
      }); //Promise end

      //return "return";
      //return resultObject;
  }

} //class ends

module.exports=Sqlclass
// mySql=new Sqlclass();
// mySql.connect()
