
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "equipmax"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports  = {
    select: function (callback) {
        var sql = "SELECT poolAssetID  FROM dataitempool LIMIT 10 ";
        con.query(sql, function (err, result , fields) {
            if (err) {
                callback("error", err)
            } else {
                callback("success", result)
            }
        });
    }
}
app.get('/show' , function (req , res) {
  var i ;
 select.select( function (err, results) {
     if (err == 'error') {
         console.log(err);
     } else {
         console.log(results);
         res.send(results.username);
     }
 });

});