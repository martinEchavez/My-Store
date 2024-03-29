const { DataTypes, Model, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  productId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'id',
  },
  productName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'name',
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'description',
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL,
    field: 'price'
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'quantity'
  },
  status: {
    allowNull: false,
    type: DataTypes.CHAR,
    field: 'status',
    defaultValue: 'active',
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.now,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.now,
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
