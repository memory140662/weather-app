let getUser = (id, callback) => {
    let user = {
        id,
        name: 'Zhu'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
    
};

getUser(123, (userObject) => {
    console.log(userObject);
});