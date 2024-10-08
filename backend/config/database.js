const sequelize = require('../models'); 

const connectDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing the database: ", error);
  }
};

module.exports = connectDatabase;