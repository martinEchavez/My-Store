const { DataTypes, Model, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  categoryId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'id',
  },
  categoryName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'name',
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'description',
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

class Category extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    }
  }
}

module.exports = {
  CATEGORY_TABLE,
  CategorySchema,
  Category,
}
