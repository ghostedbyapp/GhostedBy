module.exports = function (sequelize, DataTypes) {
    var ghostedCount = sequelize.define("ghostedCount", {
        foreign_id: DataTypes.INTEGER,
        ghosted_count: DataTypes.INTEGER
    });
    return ghostedCount;
  };
  