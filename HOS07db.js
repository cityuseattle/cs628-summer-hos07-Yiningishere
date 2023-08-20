db.createCollection('users')
db.users.insertMany([
    {name:'user1', age:30, email:'user1@example.com'},
    {name:'user2', age:30, email:'user2@example.com'},
    {name:'user3', age:30, email:'user3@example.com'},
])
