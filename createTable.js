const r = require('rethinkdb');

r.connect( {host: 'localhost', port: 28015}, (err, conn) => {
  if (err) throw err;

  const sTable = 'incidents';

  r.db('test').tableCreate(sTable).run(conn).then( (result) => {
    console.log({ action: 'tableCreate', result: JSON.stringify(result, null, 2) });
    process.exit(0);
  })
  .catch( (err) => {
    throw err;
  })

});