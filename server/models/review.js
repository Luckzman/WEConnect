module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    review: {
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Review.associate = (models) => {
    Review.belongsTo(models.Business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return Review;
};
