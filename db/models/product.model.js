const { DataTypes, Model, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  productId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'product_id',
  },
  productName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'product_name',
  },
  categoryID: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: 'categories',
    referencesKey: 'category_id',
    field: 'category_id'
  },
  modelYear: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'model_year'
  },
  listPrice: {
    allowNull: false,
    type: DataTypes.DOUBLE,
    field: 'list_price'
  }
}

class Product extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    }
  }
}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product,
}
