const { DataTypes, Model, Sequelize } = require('sequelize');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  customerId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'id',
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'first_name',
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'phone',
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'email'
  },
  country: {
    allowNull: false,
    type: DataTypes.CHAR,
    field: 'country'
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'city'
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'state'
  },
  zipCode: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'zip_code'
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

class Customer extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    }
  }
}

module.exports = {
  CUSTOMER_TABLE,
  CustomerSchema,
  Customer,
}
