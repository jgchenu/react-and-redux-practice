const express = require('express');
const path = require('path');

const app = express();

const assetMainfest = require(path.resolve(__dirname, '../build/asset-manifest.json'));


// 在 app.prod. 中，对于所有 HTTP 请求，先去 static 目录下匹配静态资源。 
app.use(express.static(path.resolve(__dirname, '../build')));

// 如果找不到，就会用 app.get指定的一个默认路径处理，和 React-Router一样，“*”代表任何路径，默认路径的处理方式就是用 ejs 模板返回一个定制的 HTML 网页。
app.get('*', (req,res) => {
  return res.render('index', {
    title: 'Sample React App',
    PUBLIC_URL: '/',
    assetMainfest,
  })
});

app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, 'views'));


module.exports = app;