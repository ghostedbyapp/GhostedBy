module.exports = function (sequelize, DataTypes) {
  var ghostedCompany = sequelize.define("ghostedCompany", {
    company_name: DataTypes.STRING,
    company_address: DataTypes.STRING,
    // company_address_2: DataTypes.STRING,
    company_city: DataTypes.STRING,
    company_state: DataTypes.STRING,
    company_zipcode: DataTypes.STRING,
    logo: DataTypes.STRING
    // ghosted_count: DataTypes.INTEGER
  });
  return ghostedCompany;
};

// --   `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
// --   `google_id` VARCHAR( 255) NOT NULL,
// --   `company_name` VARCHAR( 255 ) NOT NULL,
// --   `company_address_1` VARCHAR( 255 ) NOT NULL,
// --   `company_address_2` VARCHAR( 255 ) NOT NULL,
// --   `company_city` VARCHAR( 255 ) NOT NULL,
// --   `company_state` VARCHAR( 255 ) NOT NULL,
// --   `company_zipcode` VARCHAR( 255 ) NOT NULL,
// --   `logo` VARCHAR( 255 ) NOT NULL,
// --   `ghosted_count` VARCHAR( 255 ) NOT NULL,
// --   `time_stamp` DATETIME NOT NULL,