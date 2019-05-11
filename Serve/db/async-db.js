const mysql = require("mysql");
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "mall_project"
});

const query = function(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

query("SELECT 1 + 1 AS solution")
  .then(results => {
    if ((results[0].solution = 2)) console.log("数据库连接成功！");
  })
  .catch(error => {
    throw error;
  });

module.exports = query;
