/**
 * Created by yangtaofeng on 2016/11/24.
 */
const User = require('../userDao/sequelizeConfig');

class UserMethod {
    addUser(params) {
        let userData = null;
        return User.create(params)
        // .on('success', (msg) => {
        //     console.log('create', msg);
        //     userData = this.queryAll();
        // })
        // .on('failure', (error) => {
        //     console.log('create', error);
        // });
        // return userData;
    }

    deleteUser(params) {
        let userData = null;
        return User.destroy(params)
        // .on('success', (msg) => {
        //     console.log('delete', msg);
        //     userData = this.queryAll();
        // })
        // .on('failure', (error) => {
        //     console.log('delete', error);
        // });
        // return userData;
    }

    queryAll() {
        var userData = 'ddd';
        return User.findAll()
        // .then((data) => {
        //         userData = data;
        //     }, (err) => {
        //         userData = 'failed';
        //     });
        // return userData;
    }
}
let user = new UserMethod();
module.exports = user;