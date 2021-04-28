const users = require('../data/data.json');

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(users);
    });
}

function findById(id){
    return new Promise((resolve, reject) => {
        const user = users.find((item) => item.id == id);
        resolve(user);
    });
}

function createUser(newUser){
    return new Promise((resolve, reject) => {
        const user = users.push(newUser);
        resolve(user);
    });
}

module.exports = {
    findAll,
    findById,
    createUser
}