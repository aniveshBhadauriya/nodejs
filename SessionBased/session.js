const session =  require("express-session")

module.exports  =  session({
    secret: 'sec_token',
    resave: false,
    saveUninitialized: true

})