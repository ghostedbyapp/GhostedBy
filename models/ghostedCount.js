module.exports = function (sequelize, DataTypes) {

<<<<<<< HEAD
    // Added TIMESTAMP to collect dates
    // entry_date is the new data field
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
=======
<<<<<<< HEAD
    // Added TIMESTAMP to collect dates
    // entry_date is the new data field
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
=======
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


>>>>>>> master
>>>>>>> 274c793be5b2b8d0eb5151dd8e70fa594c9325e7

    var ghostedCount = sequelize.define("ghostedCount", {
        ghosted_count: DataTypes.INTEGER,
        entry_date: TIMESTAMP
    },
        {
            // Remove createAt and updateAt from the database
            createdAt: false,
            updatedAt: false
        });
    return ghostedCount;
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
  };
>>>>>>> master
>>>>>>> 274c793be5b2b8d0eb5151dd8e70fa594c9325e7
