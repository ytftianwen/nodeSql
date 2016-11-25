/**
 * Created by yangtaofeng on 2016/11/25.
 */
const express = require('express');
const user = require('../userManage/user');

const router = express.Router();

router.get('/', (req,res) =>{
   res.header('Access-Control-Origin','*');
    user.queryAll().then((data)=>{
        res.send(data);
    });

});
router.get('/addUser',(req,res)=>{
    res.header('Access-Control-Origin','*');
    user.addUser().then((data)=>{
        res.send(data);
    })
});
router.get('/deleteUser',(req,res)=>{
    res.header('Access-Control-Origin','*');
    user.deleteUser().then((data)=>{
        res.send(data);
    })
});

module.exports = router;