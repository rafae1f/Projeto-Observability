const sequelize = require('sequelize');

const DB_DATABASE = process.env.DB_DATABASE || "apicrud";
const DB_USERNAME = process.env.DB_USERNAME || "apicrud";
const DB_PASSWORD = process.env.DB_PASSWORD || "Pg#123";
const DB_HOST = process.env.DB_HOST || "localhost";

const seque = new sequelize.Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres'
  });

class Post extends sequelize.Model {
  
  save() {
    
    console.log('Entrou')
    super.save();
  }
}

Post.init({
  title: {
    type: sequelize.DataTypes.STRING,
    require: true
  },
  author: {
    type: sequelize.DataTypes.STRING,
    require: true
  },
  publishing: {
    type: sequelize.DataTypes.STRING,
    require: true
  },
  content: {
    type: sequelize.DataTypes.STRING(2000),
    require: true
  },
  urlImage: {
    type: sequelize.DataTypes.STRING,
    require: true
  },
  publishDate: {
    type: sequelize.DataTypes.DATEONLY,
    require: true
  },
}, {
  sequelize: seque,
  modelName: 'Post'
})

exports.initDatabase = () => {
    seque.sync({ alter: true })
}

exports.Post = Post;