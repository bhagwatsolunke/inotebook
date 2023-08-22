const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'Inotebook',
 'root',
 '1234567890',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to MySQL successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MySQL:', error);
  });

module.exports = sequelize;
