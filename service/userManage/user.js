/**
 * Created by yangtaofeng on 2016/11/24.
 */
const User = require('../userDao/sequelizeConfig');

class UserMethod {
    addUser(params) {
        return User.create(params)
    }

    deleteUser(params) {
        return User.destroy({
            'where':params
        })
    }

    queryAll() {
        return User.findAll()
    }
}
let user = new UserMethod();
module.exports = user;