const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server listening on: http://localhost:${PORT}`);
});