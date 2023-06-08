const db = require('./database')
const {DataTypes} = require('sequelize')

module.exports = {
  Info: db.define('info', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    content: {
      type: DataTypes.STRING({length: 200})
    },
  })
}