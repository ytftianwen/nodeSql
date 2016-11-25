const express = require('express');
const path = require('path');
const ejs = require('ejs');
const User = require('./service/userManage/user');

//加载api路由
const apiUser = require('./service/routers/apiUser');

const app = express();
const router = express.Router();

//设置模板视图
app.set('views', path.join('./client/views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//设置静态文件加载路径
app.use('/client', express.static('./client'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Express'});
});


//设置api请求路径,例 http:127.0.0.1/user/addUser请求数据接口
app.use('/user', apiUser);


app.listen(3000, (req, res) => {
    console.log('port 29 stared')
});



