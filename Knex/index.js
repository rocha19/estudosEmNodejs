var db = require("./config");
const knex = require("./config");


/*
knex.where({email: "email@email.com"}).delete().table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});




knex.where({email: "email@email.com"}).update({role: 4, plan_id: }).table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});





knex.where({email: "email@email.com"}).orWhere({id: }).table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});




knex.whereRaw("email = 'email@email.com' OR id = ").table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});




knex.where({role: }).table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});



var ddd = [
    {
        name: "nome",
        email: "email@email.com",
        image_url: "",
        password: "",
        role: "",
        plan_id: ""
    },
    {
        name: "nome",
        email: "email@email.com",
        image_url: "",
        password: "",
        role: "",
        plan_id: ""
    },
    {
        name: "nome",
        email: "email@email.com",
        image_url: "",
        password: "",
        role: "",
        plan_id: ""
    },
]

knex.insert(ddd).into('users').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});





knex.select().table("users").then(dados => {
    console.log(dados);
}).catch(err => {
    console.log(err);
});



knex.raw("SELECT * from users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


knex.where({id: }).count().table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


knex.insert({user_id: , description: "Mamateiro da UFERSA"}).table("authors").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

var query = knex.table("users").where({'users.id': }).innerJoin("authors","users.id","authors.user_id").then(data => {
    console.log(data);
}).then(err => {
    console.log(err);
});


knex('users')
  .join('contacts', 'users.id', '=', 'contacts.user_id')
  .select('users.id', 'contacts.phone')

var query = knex.table("users").where({'users.id': }).innerJoin("authors","users.id","authors.user_id").then(data => {
    console.log(data);
}).then(err => {
    console.log(err);
});



var query = knex.table("users").innerJoin("authors","users.id","authors.user_id").then(data => {
    console.log(data);
}).then(err => {
    console.log(err);
});


var query = knex.where({"users.id": }).table("users").innerJoin("authors","users.id","authors.user_id").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

*/

//console.log(query.toSQL());


