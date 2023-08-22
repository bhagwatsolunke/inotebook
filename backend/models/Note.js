const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Update the import
const User = require('./User');
const Note = sequelize.define('note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING,
    defaultValue: 'General',
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Note.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Note); 

module.exports = Note;
