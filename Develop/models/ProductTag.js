const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primarykey: true, 
      allowNull: false, 
      autoIncrement: true,
    }, 
    tag_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'tag', 
        key: 'id'
      }, 
      product_id:{
        type: DataTypes.INTEGER,
        refrences: 
        'product',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
