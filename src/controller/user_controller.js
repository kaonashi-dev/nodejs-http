const UserModel = require('../model/user_model');

async function getUsers(req, res) {
    try {

        const data = await UserModel.findAll();
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(data));

    } catch (error) {
        console.log(error);
    }
}
///
async function getUser(req, res, id) {
    try {

        const data = await UserModel.findById(id);

        if (!data) {
            res.writeHead(404, { 'Content-type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not foud' }));
        } else {
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(JSON.stringify(data));
        }

    } catch (error) {
        console.log(error);
    }
}
///
async function createUser(req, res) {
    try {

        const user = {
            id: 30,
            name: "User example",
            email: "user@example.com",
            avatar: "https://robohash.org/eosdictaoptio.png?size=50x50&set=set1"
        }

        const newUser = UserModel.createUser(user);

        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(newUser));

    } catch (error) {
        console.log(error);
    }
}
/////
module.exports = {
    getUsers,
    getUser,
    createUser
}