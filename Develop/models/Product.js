// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { Category } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    prod_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 15,
      allowNull: false,
      validate:{
        isNumeric: true,
      },
    },
      price: {
        type: DataTypes.DECIMAL(15,2),
        allowNull: false,
        validate: {
          isDecimal: true, 
        }
      },
     category_id: {
      type: DataTypes.INTEGER,
      allowNull: true, 
      references: {
        model: 'category',
        key: 'id',
      },

     },
    },
    // define columns
 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
