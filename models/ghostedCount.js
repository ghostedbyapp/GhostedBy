module.exports = function (sequelize, DataTypes) {

  // remove ghosted_count

// Try to make it look like this please

  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };



    var ghostedCount = sequelize.define("ghostedCount", {
        foreign_id: DataTypes.INTEGER,
        ghosted_count: DataTypes.INTEGER
    });
    return ghostedCount;
  };
