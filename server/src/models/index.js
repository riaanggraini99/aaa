//import { __dirname } from 'path';

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}


const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

fs
 .readdirSync(__dirname)
.filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
.forEach(file => {
    sequelize.import(path.join(__dirname, file))
})

Object
.keys(sequelize.models)
.forEach(modelName => {
    if ('associate' in sequelize.models[modelName]) {
        sequelize.models[modelName].associate(sequelize.models)
    }
})
db.sequelize = sequelize
db.sequelize = sequelize

module.exports =db