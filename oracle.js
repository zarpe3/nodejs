var oracledb = require('oracledb');

oracledb.getConnection(
  {
    user          : "rcx",
    password      : "c2618df4cb",
    connectString : "localhost/XE"
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      'SELECT * from inb_exten WHERE exten = :id',
      ['9303'],  // bind value for :id
      function(err, result)
      {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows);
        doRelease(connection);
      });
  });

function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}
