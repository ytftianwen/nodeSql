/**
 * Created by yangtaofeng on 2016/11/25.
 */
const express = require('express');
const user = require('../userManage/user');
const stringify = require('json-stringify-safe');
var bodyParser = require('body-parser')


// 创建 application/json 解析
var jsonParser = bodyParser.json()

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

const router = express.Router();

router.get('/', (req, res) => {
    res.header('Access-Control-Origin', '*');

    user.queryAll().then((data) => {
        res.send(data);
    });

});
router.post('/addUser', jsonParser, (req, res) => {
    res.header('Access-Control-Origin', '*');
    user.addUser(req.body).then(() => {
        user.queryAll().then((data) => {
            res.send(data);
        })
    })
});
router.post('/deleteUser', jsonParser, (req, res) => {
    res.header('Access-Control-Origin', '*');
    user.deleteUser(req.body).then(() => {
        user.queryAll().then((data) => {
            res.send(data);
        })
    })
});

module.exports = router;