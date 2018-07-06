module.exports = {
    port : process.env.PORT || 8081,
    db :{
        database : process.env.DB_NAME || 'inidatabase',
        user : process.env.DB_USER || 'iniuser',
        password: process.env.DB_PASS || 'inipassword',
        options :{
            dialect: process.env.DIALECT || 'sqlite',
            host : process.env.HOST || 'localhost',
            storage :'./inidatabase.sqlite'
        }
    }
}