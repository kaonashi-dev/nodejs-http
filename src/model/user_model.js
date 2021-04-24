const users = require('../data/data.json');

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(users);
    });
}

function findById(){
    return new Promise((resolve, reject) => {
        const user = users.find((item) => item.id == id);
        resolve(user);
    });
}

module.exports = {
    findAll,
    findById
}