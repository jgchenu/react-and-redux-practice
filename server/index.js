const isProduction = process.env.NODE_ENV === 'production';
const app  =  isProduction ? require('./app.prod') : require('./app.dev');

if(!isProduction) {
  process.env.NODE_ENV = 'development';
}

const PORT = process.env.PROT || 9000 ;

app.listen(PORT, function() {
  console.log('running in'+ process.env.NODE_ENV);
  console.log ('listening on port :' + PORT);
})
